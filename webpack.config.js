const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx|ts|d.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  externals: ["vue", "axios", "element-ui", "qs"],
  output: {
    filename: "request.min.js",
    path: path.resolve(__dirname, "./dist"),
    library: "library",
    libraryTarget: "umd",
  },
};
