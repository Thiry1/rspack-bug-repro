// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry:"./src/index.js",
  output: {
    path: "./rspack-dist",
  },
  module: {
    rules: [
      {
        // type: "css/module",
        type: "css",
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          { loader: "css-loader" },
          // {
          //   loader: "sass-loader",
          // }
        ],
      },
    ],
  },
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "main.css",
  //   }),
  // ],
  optimization: {
    minimize: false,
  },
};
