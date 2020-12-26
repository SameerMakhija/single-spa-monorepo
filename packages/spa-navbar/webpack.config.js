const path = require("path");
const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const opts = {
    orgName: "publicis-sapient",
    projectName: "spa-navbar",
    webpackConfigEnv,
    argv,
  };
  const defaultConfig = singleSpaDefaults(opts);
  const serverConfig = singleSpaDefaults(opts);

  const externals = [
    ...defaultConfig.externals,
    "react-redux",
    "@reduxjs/toolkit",
    /react-dom\/.+/,
  ];

  defaultConfig.plugins = defaultConfig.plugins.filter(
    (p) => p.constructor.name !== "CleanWebpackPlugin"
  );
  serverConfig.plugins = serverConfig.plugins
    .filter((p) => p.constructor.name !== "CleanWebpackPlugin")
    .filter((p) => p.constructor.name !== "SystemJSPublicPathWebpackPlugin");

  return [
    webpackMerge.smart(defaultConfig, {
      // modify the webpack config however you'd like to by adding to this object
      externals,
    }),
    webpackMerge(serverConfig, {
      // modify the webpack config however you'd like to by adding to this object
      target: "node",
      mode: "development",
      entry: path.resolve(
        __dirname,
        `src/${opts.orgName}-${opts.projectName}-server.js`
      ),
      output: {
        library: "spa-navbar",
        libraryTarget: "umd",
        filename: `${opts.orgName}-${opts.projectName}-server.js`,
      },
      externals,
    }),
  ];
};
