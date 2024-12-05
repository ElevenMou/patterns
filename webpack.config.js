const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

const deps = require("./package.json").dependencies;

const printCompilationMessage = require("./compilation.config.js");

module.exports = (_, argv) => ({
  mode: "production",
  entry: {
    index: ["./src/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
    library: "@elevenmou/patterns",
    globalObject: "this",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8084,
    static: path.join(__dirname, "dist"),
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src/styles/style.scss"),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react", "stage-0"],
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "patterns",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        ".": "./src/index.ts",
        "./base-theme": "./src/styles/style.scss",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
