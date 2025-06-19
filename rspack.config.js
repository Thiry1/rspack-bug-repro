const {defineConfig} = require("@rspack/cli");
const {rspack} = require("@rspack/core");

module.exports = defineConfig({
  target: "web",
  stats: "verbose",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: "./dist",
  },
  module: {
    rules :[
      {
        test: /\.css$/,
        use: [
          {
            loader: rspack.CssExtractRspackPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        // exclude: /core-js/,
        use: {
          loader: "builtin:swc-loader",
          options: {
            isModule: "unknown",
            jsc: {
              parser: {
                syntax: "ecmascript",
              },
            },
            env: {
              mode: process.env.ENV_MODE,
              coreJs: require("core-js/package.json").version,
              // rspack version 1.3.11 with:
              // Chrome 121 + not exclude core-js:
              // -> build hang.
              //
              // Chrome 121 + exclude core-js:
              // -> build successful.
              //
              // rspack 1.3.12 and later with:
              // Chrome 121 + not exclude core-js:
              // -> build failed.(not hang)
              // ERROR in ./src/style.css
              //   × Module build failed:
              //   ╰─▶   × $ is not a function
              //
              // Chrome 121 + exclude core-js:
              // -> build successful.
              //
              // Chrome 122 and later:
              // -> build successful.
              targets: ["Chrome 121"],
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