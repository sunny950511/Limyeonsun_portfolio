import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Limyeonsun_portfolio/",
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: true,
    host: true,
  },
});
