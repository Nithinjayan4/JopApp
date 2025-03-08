import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Allows using "@" to refer to "src"
    },
  },
  server: {
    port: 5173, // Ensures the dev server runs on port 3000
    hmr: {
      host: "localhost", // Ensures Hot Module Replacement works correctly
    },
    proxy: {
      "/api": {
        target: "https://jopapp-0gt0.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: "/", // Ensures assets are correctly resolved
});
