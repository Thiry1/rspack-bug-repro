module.exports = {
  entry:"./src/index.js",
  output: {
    path: "./rspack-dist",
  },
  module: {
    rules: [
      {
        // type: "css/module",
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
