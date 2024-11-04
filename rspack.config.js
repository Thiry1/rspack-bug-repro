const {defineConfig} = require("@rspack/cli");
const {rspack} = require("@rspack/core");

module.exports = defineConfig({
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: "./dist",
  },
  module: {
    rules :[
      {
        test: /\.css$/,
        type: "javascript/auto",
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/core-js/],
        use: {
          loader: "builtin:swc-loader",
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
              },
            },
            env: {
              mode: process.env.ENV_MODE,
              coreJs: require("core-js/package.json").version,
              targets: ["IE 11"],
            },
          },
        },
        type: "javascript/auto"
      },
    ],
  },
  experiments: {
    css: false
  },
  plugins: [
    new rspack.CssExtractRspackPlugin({
      filename: `[name].[chunkhash:10].css`,
    }),
  ],
});