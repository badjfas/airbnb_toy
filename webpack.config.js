const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const path = require("path");
const port = process.env.PORT || 8000;

const paths = path.resolve(__dirname + "/dist");

console.log(paths);
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  optimization: {
    usedExports: true,
  },
  output: {
    filename: "bundle.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "images",
              outputPath: "images",
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(ico|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ESLintPlugin({
      // Plugin options
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      formatter: require.resolve("react-dev-utils/eslintFormatter"),
      eslintPath: require.resolve("eslint"),
      // ESLint class options
      resolvePluginsRelativeTo: __dirname,
      baseConfig: {
        extends: [require.resolve("eslint-config-react-app/base")],
      },
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  devServer: {
    host: "localhost",
    port: port,
    open: true,
    liveReload: true,
    hot: true,
  },
};
