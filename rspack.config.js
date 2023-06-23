const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry:"./src/index.js",
  output: {
    path: "./rspack-dist",
  },
  module: {
    rules: [
      {
        type: "css/module",
        test: /\.scss$/,
        use: [
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          }
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
