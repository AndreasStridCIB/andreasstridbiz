import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      globalComponents: path.resolve(__dirname, "src/globalComponents"),
      assets: path.resolve(__dirname, "src/assets"),
      modules: path.resolve(__dirname, "src/modules"),
    },
  },
});
