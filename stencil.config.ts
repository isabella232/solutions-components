import { Config } from "@stencil/core";
import { babel } from "@rollup/plugin-babel";

// default to no additional rollup plugins
// see: https://stenciljs.com/docs/module-bundling#custom-rollup-plugins
const rollupPlugins = {
  // Plugins injected before rollupNodeResolve()
  before: [],
  // Plugins injected after commonjs()
  after: [
    babel({
      // have to apply this for now since this line in a dependency of calcite
      // components is causing build issues in our consuming application
      // https://github.com/Qix-/color/blob/4647eae1fa2c484df2d38713de03375235b3fb01/index.js#L257
      babelHelpers: "bundled",
      include: [/\/color\//],
      plugins: ["@babel/plugin-proposal-numeric-separator"],
    }),
  ],
};

export const config: Config = {
  namespace: "solutions-components",
  globalStyle: "src/assets/styles/styles.css",
  buildEs5: "prod",
  commonjs: {
    namedExports: {
      "node_modules/esri-loader/dist/umd/esri-loader.js": [
        "getScript",
        "isLoaded",
        "loadModules",
        "loadScript",
        "loadCss",
        "utils",
      ],
    },
  },
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [
        { src: "assets/nls" },
        { src: "demos" },
        { src: "utils" }
      ]
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "dist-custom-elements-bundle",
    },
    {
      type: "docs-readme"
    },
    {
      type: "docs-json",
      file: "dist/docs.json",
    }
  ],
  rollupPlugins,
  preamble: "Copyright 2021 Esri\nLicensed under the Apache License, Version 2.0\nhttp://www.apache.org/licenses/LICENSE-2.0"
};
