import {defineConfig} from "vite";
import path from "node:path";

const dirname = import.meta.dirname;

const config = defineConfig({
  mode: 'development',

  server: {
    port: 8080,
  },

  resolve: {
    extensions: [".ts", ".js"],
    alias: [
      { find: "~lib", replacement: path.resolve(dirname, "src", "lib") },
      { find: "~core", replacement: path.resolve(dirname, "src", "lib", "core") },
      { find: "~assets", replacement: path.resolve(dirname, "assets") },
    ]
  },
});

export default config;
