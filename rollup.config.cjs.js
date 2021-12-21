//import commonjs from "rollup-plugin-commonjs";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript";
import json from "rollup-plugin-json";

/* This compilation does not work yet, use npm run compile */

export default {
  input: "src/index.ts",
  output: {
    format: "umd",
    sourceMap: "inline",
    file: "dist/index.js",
    name: 'bundle',
    exports: "named"
  },
  external: [
    "electron",
    "fs",
    "os",
    "crypto",
    "path",
    "http",
    "https",
    "Buffer",
    "stream",
    "net",
    "tls",
    "zlib",
    "events",
    "url",
    "util",
    "string_decoder",
  ],
  inlineDynamicImports: true,
  optimizeDeps: { exclude: ['ky', "ky-universal"], include: ["keccak256", "keccak"] },
  plugins: [typescript(), resolve(), commonjs(), json()],
};

