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
          }
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
