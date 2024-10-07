import CssExtractWebpackPlugin from "mini-css-extract-plugin";
import * as sass from "sass";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry:"./src/index.js",
  target: ["web"],
  output: {
    path: path.resolve(__dirname, "./webpack-dist"),
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
        use: [
          {
            loader: CssExtractWebpackPlugin.loader,
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
    new CssExtractWebpackPlugin(),
  ],
}