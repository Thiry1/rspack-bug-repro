module.exports = {
  entry:"./src/index.js",
  target: ["node18.0"],
  output: {
    path: "./dist",
    libraryTarget: "commonjs2",
  },
  externals: {
    "react": "react",
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
  },
};
