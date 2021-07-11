const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const webpack = require("webpack");

const path = require("path");
const port = process.env.PORT || 3030;

const paths = path.resolve(__dirname + "/dist");
module.exports = {
  // entry: {
  //   // For Typescript
  //   "js/app": ["./src/App.tsx"],
  // },
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV === "productuon" ? "production" : "development",

  optimization: {
    minimizer: [new CssMinimizerPlugin({})],
  },
  output: {
    filename: "bundle.[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
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
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
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
    new webpack.EnvironmentPlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new ForkTsCheckerWebpackPlugin({}),
    new MiniCssExtractPlugin({
      linkType: true,
      filename: (_, __, ___) => {
        return "[name].css";
      },
      chunkFilename: "[id].[contenthash].css",
    }),
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
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.join(__dirname, "src"), "node_modules"],
  },
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: port,
    open: false,
    liveReload: true,
    hot: true,
    inline: false,
    historyApiFallback: true,
  },
};
