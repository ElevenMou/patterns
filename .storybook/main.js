// .storybook/main.js
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-essentials",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    // Add SCSS support
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src/styles/style.scss"),
    });

    return config;
  },
};
