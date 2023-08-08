const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry:"./src/index.js",
  output: {
    path: path.resolve(__dirname, "./webpack-dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            // options: {
            //   importLoaders: 1,
            // }
          },
          // {
          //   loader: "sass-loader",
          //   options: {
          //     implementation: require("sass"),
          //   },
          // }
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
  optimization: {
    minimize: false,
  },
};
