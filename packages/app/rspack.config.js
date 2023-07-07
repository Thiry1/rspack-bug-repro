module.exports = {
  entry:"./src/index.js",
  target: ["node18.0"],
  output: {
    path: "./dist",
  },
  optimization: {
    minimize: false,
    moduleIds: "named",
  },
};
