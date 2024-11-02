const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {},
  mode: "none",
  output: {
    clean: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/chrome",
        },
        {
          from: "src/main",
          globOptions: {
            ignore: ["**/tests/**"],
          },
        },
      ],
    }),
  ],
};
