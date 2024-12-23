const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const config = {
  mode: "production",
  entry: {
    styles: ["./src/styles/index.ts"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react", "stage-0"],
        },
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader?importLoaders=1!postcss-loader",
        ],
      },
    ],
  },
  optimization: {},
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles.css`,
    }),
  ],
};

module.exports = config;
