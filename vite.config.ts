import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "React 2 Reddit",
        short_name: "React 2 Reddit",
        description: "Reddit read only client writen in react",
        theme_color: "#fff",
        icons: [
          {
            src: "/assets/react-reddit-logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/react-reddit-logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
