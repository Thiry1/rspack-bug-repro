import {defineConfig} from "@rspack/cli";
import rspack from "@rspack/core";
import * as sass from "sass";
export default defineConfig({
  mode: "development",
  entry:"./src/index.js",
  target: ["web"],
  output: {
    path: "./rspack-dist",
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  experiments: {
    css: false,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        type: "javascript/auto",
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "___[local]___[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: sass,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({}),
  ],
})