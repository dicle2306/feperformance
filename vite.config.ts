import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* wer weiß was das macht (ich weiß... seite kaputt)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },*/
});
