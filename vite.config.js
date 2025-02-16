import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    assetsInlineLimit: 0, 
  },
  optimizeDeps: {
    include: ["video.js"], 
  },
  css: {
    modules: {
      localsConvention: "dashes",
    },
  },
});