import {defineConfig} from "@rspack/cli";
import rspack from "@rspack/core";
import * as sass from "sass";
export default defineConfig({
  mode: "development",
  entry:"./src/index.js",
  output: {
    path: "./rspack-dist",
    filename: "[name].[chunkhash:10].js",
    chunkFilename: "[name].[chunkhash:10].js",
  },
  resolve: {
    extensions: [".js", ".css"],
  },
  experiments: {
    css: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        type: "javascript/auto",
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "___[local]___[hash:base64:5]",
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: "style.[chunkhash:10].css",
    }),
  ],
})