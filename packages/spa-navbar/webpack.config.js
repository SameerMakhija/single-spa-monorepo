const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "publicis-sapient",
    projectName: "spa-navbar",
    webpackConfigEnv,
    argv,
  });

  return webpackMerge.smart(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    externals: ["react", "redux", "redux", "react-redux", "@reduxjs/toolkit"],
  });
};
