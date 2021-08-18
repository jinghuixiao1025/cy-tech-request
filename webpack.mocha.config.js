const WebpackMochaPlugin = require("webpack-mocha-plugin");
const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  // target: "node",

  entry: {
    test: __dirname + "/test/index.spec.ts",
  },

  output: {
    path: path.resolve(__dirname, "./.tmp/test"),
    filename: "[name].bundle.js",
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  externals: [nodeExternals()],

  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
    ],
  },

  plugins: [
    new WebpackMochaPlugin({
      codeCoverage: false,
    }),
  ],
  // When using code coverage exclude the coverage report from being watched.
  // Otherwise you might get an infinite loop.
  watchOptions: {
    ignored: /coverage/,
  },
};
