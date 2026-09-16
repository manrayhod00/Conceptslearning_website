import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Every client-side route in App.tsx. Each one gets a real file on disk so
// GitHub Pages answers a deep link or hard reload with 200 and the app shell,
// instead of its own 404 page. 404.html covers anything not listed (and lets
// React Router render the NotFound page).
const ROUTES = [
  "courses",
  "faculty",
  "results",
  "mock-platform",
  "contact",
  "about-us",
  "about",
];

// GitHub Pages has no server-side rewrite: without this, /courses returns the
// host's 404 for both visitors and crawlers, even though the sitemap lists it.
function spaRoutes(): Plugin {
  return {
    name: "spa-static-routes",
    apply: "build",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      if (!fs.existsSync(index)) return;

      fs.copyFileSync(index, path.join(dist, "404.html"));

      for (const route of ROUTES) {
        const dir = path.join(dist, route);
        fs.mkdirSync(dir, { recursive: true });
        fs.copyFileSync(index, path.join(dir, "index.html"));
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    spaRoutes(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
