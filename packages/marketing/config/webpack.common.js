const HtmlWebpackPlugin = require("html-webpack-plugin");
const { plugins } = require("../../container/config/webpack.common");
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Fixed template path (dot before "src" removed)
    }),
  ],
};

// Summary --> For this file
// Uses Webpack to process JavaScript files (.js and .mjs).
// Excludes node_modules for performance.
// Uses babel-loader to transpile modern JS into ES5 that broswer can understand.
// Supports JSX with @babel/preset-react.
// Optimizes the output using @babel/plugin-transform-runtime.
