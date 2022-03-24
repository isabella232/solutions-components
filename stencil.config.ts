import autoprefixer from "autoprefixer";
import { Config } from '@stencil/core';
import { sass } from "@stencil/sass";
import { postcss } from "@stencil/postcss";
import tailwindcss from "tailwindcss";
import tailwindConfig from "./tailwind.config";

export const config: Config = {
  namespace: 'solutions',
  globalStyle: 'src/assets/styles/styles.scss',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'assets/nls' },
        { src: 'demos' },
        { src: 'utils' }
      ]
    },
    { type: "dist-custom-elements-bundle" },
    { type: "dist-custom-elements", autoDefineCustomElements: true },
    {
      type: 'docs-readme'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/assets/styles/includes.scss"]
    }),
    postcss({
      plugins: [
        tailwindcss(tailwindConfig),
        autoprefixer()
      ]
    })
  ],
  preamble: 'Copyright 2021 Esri\nLicensed under the Apache License, Version 2.0\nhttp://www.apache.org/licenses/LICENSE-2.0'
};
