import express from "express";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  const isProd = process.env.NODE_ENV === "production" || !!process.env.K_SERVICE;
  console.log(`Running in ${isProd ? "production" : "development"} mode.`);

  if (!isProd) {
    try {
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    } catch (err) {
      console.warn("Failed to load Vite middleware:", err);
    }
  } else {
    // In production, serve static files
    const distPath = typeof __dirname !== 'undefined' ? __dirname : path.join(process.cwd(), 'dist');
    console.log(`Serving static files from ${distPath}`);
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
