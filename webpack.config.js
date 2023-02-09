const webpack = require("webpack");
const path = require("path");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = require("./env.config");

const imagesRule = {
  generator: {
    filename: "assets/images/[name][ext]",
  },
  test: /\.(png|jpe?g|gif|ico)$/i,
  type: "asset/resource",
};
const svgRule = (envConfig) => ({
  test: /\.svg$/i,
  type: "javascript/auto",
  use: [
    {
      loader: "babel-loader",
      options: {
        cacheDirectory: envConfig.tsCache,
        presets: [
          ["@babel/preset-env", { loose: true }],
          ["@babel/preset-react", { development: envConfig.isDev }],
        ],
      },
    },
    {
      loader: "react-svg-loader",
      options: {
        jsx: true, // true outputs JSX tags
      },
    },
  ],
});
const stylesRules = (envConfig) => [
  {
    test: /\.(s[ac]ss|css)$/i,
    exclude: /\.lazy\.css$/i,
    type: "javascript/auto",
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          // Prefer `dart-sass`
          implementation: require("sass"),
        },
      },
    ],
  },
  {
    test: /\.lazy\.css$/i,
    use: [
      {
        loader: "style-loader",
        options: { injectType: "lazyStyleTag" },
      },
      "css-loader",
    ],
  },
];
const scriptRule = (envConfig, test, presets = []) => ({
  exclude: /node_modules/,
  test: test,
  type: "javascript/auto",
  use: {
    loader: "babel-loader",
    options: {
      cacheDirectory: envConfig.tsCache,
      presets: [
        ["@babel/preset-env", { loose: true }],
        ["@babel/preset-react", { development: envConfig.isDev }],
        ...presets,
      ],
      plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        "@babel/plugin-syntax-dynamic-import",
        // new webpack.ProvidePlugin({
        //   React: "react",
        // }),
      ],
    },
  },
});
const typescriptRule = (envConfig) =>
  scriptRule(envConfig, /\.tsx?$/i, ["@babel/preset-typescript"]);
const javascriptRule = (envConfig) => scriptRule(envConfig, /\.jsx?$/i);
const optimization = (envConfig) => {
  const result = {};

  if (!envConfig.isDev) {
    result.minimize = true;
    result.minimizer = ["...", new CssMinimizerWebpackPlugin()];
  }

  return result;
};
const cleanWebpack = (envConfig) =>
  new CleanWebpackPlugin({ verbose: !envConfig.isDev });
const extractHtml = () => new HtmlWebpackPlugin();
const includeAppDefinitions = (envConfig) =>
  new webpack.DefinePlugin({
    ...Object.keys(envConfig.appDefinitions).reduce((acc, key) => {
      acc[key] = JSON.stringify(envConfig.appDefinitions[key]);

      return acc;
    }, {}),
    __BUILT_AT__: webpack.DefinePlugin.runtimeValue(Date.now, [
      path.resolve(__dirname, "env.config.js"),
    ]),
  });
const jsMapLoaderRule = {
  enforce: "pre",
  use: "source-map-loader",
  test: /\.js/i,
};

const configMain = (env) => {
  const envConfig = config(env);
  const result = {
    entry: path.resolve(__dirname, "./src/index.js"),
    mode: envConfig.mode,
    module: {
      rules: [
        imagesRule,
        svgRule(envConfig),
        ...stylesRules(envConfig),
        typescriptRule(envConfig),
        javascriptRule(envConfig),
      ],
    },
    optimization: optimization(envConfig),
    output: {
      filename: "index_bundle.js",
      path: path.resolve(__dirname, "./build"),
    },
    plugins: [
      cleanWebpack(envConfig),
      includeAppDefinitions(envConfig),
      extractHtml(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/module"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/module/components"),
        "@core": path.resolve(__dirname, "src/module/core"),
        "@pages": path.resolve(__dirname, "src/module/pages"),
      },
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      fallback: {
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
      },
    },
  };

  if (envConfig.isDev) {
    result.devtool = "source-map";
    result.module.rules.push(jsMapLoaderRule);

    if (env === "local") {
      result.devServer = {
        client: {
          overlay: true,
        },
        compress: envConfig.compress,
        devMiddleware: {
          index: "index_bundle.js",
        },
        hot: true,
        open: false,
        port: 8919,
        static: {
          directory: path.join(__dirname, "build"),
          serveIndex: true,
        },
      };
    }
  }

  return result;
};

const { NODE_ENV } = process.env;

module.exports = configMain(NODE_ENV);
