import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Limyeonsun_portfolio/",
  plugins: [react()],
  build: {
    outDir: "docs",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-v8.js`,
        chunkFileNames: `assets/[name]-[hash]-v8.js`,
        assetFileNames: `assets/[name]-[hash]-v8.[ext]`,
      },
    },
  },
  server: {
    port: 5174,
    strictPort: true,
    host: true,
  },
});
