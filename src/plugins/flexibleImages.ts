import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

const MIME: Record<string, string> = {
  jpg:  'image/jpeg',
  jpeg: 'image/jpeg',
  png:  'image/png',
  webp: 'image/webp',
  gif:  'image/gif',
  svg:  'image/svg+xml',
  mp4:  'video/mp4',
};

function findByStem(dir: string, stem: string): string | null {
  if (!fs.existsSync(dir)) return null;
  const match = fs.readdirSync(dir).find(f => {
    const parsed = path.parse(f);
    return parsed.name === stem && fs.statSync(path.join(dir, f)).size > 0;
  });
  return match ? path.join(dir, match) : null;
}

export function flexibleImages(): Plugin {
  return {
    name: 'flexible-images',

    // DEV: serve any image by stem name, ignoring the requested extension
    configureServer(server) {
      const imagesRoot = path.resolve('public/images');

      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        if (!url.startsWith('/images/')) return next();

        // Resolve and confine the path to public/images to prevent traversal
        // outside it via `../` segments in the request URL.
        const requested = path.resolve(imagesRoot, '.' + url.slice('/images'.length));
        if (requested !== imagesRoot && !requested.startsWith(imagesRoot + path.sep)) {
          return next();
        }
        if (fs.existsSync(requested) && fs.statSync(requested).size > 0) return next();

        const dir  = path.dirname(requested);
        const stem = path.parse(requested).name;
        const real = findByStem(dir, stem);

        if (real) {
          const ext = path.extname(real).slice(1).toLowerCase();
          res.setHeader('Content-Type', MIME[ext] ?? 'application/octet-stream');
          res.setHeader('Cache-Control', 'no-cache');
          fs.createReadStream(real).pipe(res);
        } else {
          next();
        }
      });
    },

    // PROD: after Vite copies public/ → dist/, fix any stem-matched images
    // that landed with the wrong extension (0-byte placeholder replaced by real file)
    closeBundle() {
      const distImages = path.resolve('dist/images');
      if (!fs.existsSync(distImages)) return;

      patchDir(distImages);
    },
  };
}

function patchDir(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // Recurse into subdirectories first
  entries.filter(e => e.isDirectory()).forEach(e => patchDir(path.join(dir, e.name)));

  // Group files by stem
  const byName = entries.filter(e => e.isFile()).reduce<Record<string, string[]>>((acc, e) => {
    const stem = path.parse(e.name).name;
    (acc[stem] ??= []).push(e.name);
    return acc;
  }, {});

  for (const [stem, files] of Object.entries(byName)) {
    if (files.length < 2) continue;

    const real    = files.find(f => fs.statSync(path.join(dir, f)).size > 0);
    const empties = files.filter(f => fs.statSync(path.join(dir, f)).size === 0);

    if (!real || empties.length === 0) continue;

    const srcPath = path.join(dir, real);
    empties.forEach(empty => {
      fs.copyFileSync(srcPath, path.join(dir, empty));
    });
  }
}
