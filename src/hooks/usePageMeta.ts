import { useEffect } from 'react';

const SITE_NAME = 'Crystal Pools';

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    const setMeta = (selector: string, content: string, attr = 'name') => {
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${selector}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, selector);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    setMeta('og:title', `${title} | ${SITE_NAME}`, 'property');
    setMeta('og:description', description, 'property');
    setMeta('twitter:title', `${title} | ${SITE_NAME}`, 'property');
    setMeta('twitter:description', description, 'property');
  }, [title, description]);
}
