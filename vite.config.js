import {defineConfig} from "vite";

const config = defineConfig({
  mode: 'development',

  server: {
    port: 8080,
  },

  resolve: {
    extensions: [".ts", ".js"]
  },
});

export default config;
