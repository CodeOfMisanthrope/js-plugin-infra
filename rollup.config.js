import path from "node:path";
import del from "rollup-plugin-delete";
import alias from "@rollup/plugin-alias";
import terser from "@rollup/plugin-terser";
import pkg from "./package.json" with { type: "json" };

const dirname = import.meta.dirname;

const config = {
  input: path.resolve(dirname, "src", "lib", "index.js"),
  output: [
    {
      file: pkg.exports.import,
      name: pkg.name,
      format: "esm",
      sourcemap: true,
    }
  ],
  plugins: [
    // del({ targets: "dist" }),
    del({ targets: path.resolve(dirname, "dist") }),
    terser(),
    alias({
      entries: [
        // { find: "~lib", replacement: "src/lib" },
        // { find: "~core", replacement: "src/lib/core" },
        // { find: "~assets", replacement: "assets" },
        { find: "~lib", replacement: path.resolve(dirname, "src", "lib") },
        { find: "~core", replacement: path.resolve(dirname, "src", "lib", "core") },
        { find: "~assets", replacement: path.resolve(dirname, "assets") },
      ],
    }),
  ],
};

export default config;
