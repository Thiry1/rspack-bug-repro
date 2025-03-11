import CssExtractWebpackPlugin from "mini-css-extract-plugin";
import * as sass from "sass";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: "development",
  entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, "./webpack-dist"),
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
        ],
      },
    ],
  },
  plugins: [
    new CssExtractWebpackPlugin({
      filename: "style.[chunkhash:10].css",
    }),
  ],
}