import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({ babel: { plugins: [["babel-plugin-styled-components"]] } }),
  ],
  server: {
    host: true,
    port: 3000,
    proxy: {
      "/service1": { target: "http://localhost:3001" },
      "/service2": { target: "http://localhost:3001" },
    },
  },
});
