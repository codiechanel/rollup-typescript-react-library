import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
// import multiEntry from "rollup-plugin-multi-entry";
import multiInput from "rollup-plugin-multi-input";

import pkg from "./package.json";

export default {
  // input: 'src/index.tsx',
  input: "src/**/index.tsx",
  // plugins: [multiEntry()],
  output: [
    {
      dir: "./",
      format: "cjs",
      exports: "named",
      sourcemap: true
    },

    {
      dir: "es",
      format: "esm",
      exports: "named",
      sourcemap: true
    }
  ],

  plugins: [
    // multiEntry(),
    multiInput(),
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: "**/__tests__/**",
      clean: true
    }),
    commonjs({
      include: ["node_modules/**"],
      namedExports: {
        "node_modules/react/react.js": [
          "Children",
          "Component",
          "PropTypes",
          "createElement"
        ],
        "node_modules/react-dom/index.js": ["render"]
      }
    })
  ]
};