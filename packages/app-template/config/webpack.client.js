/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');
const webpackConst = require('./webpack.constants');

module.exports = (webpackConfigEnv, argv) => {
    const opts = webpackConst(webpackConfigEnv, argv);
    const APP_NAMESPACE = `${opts.ORG_NAME}-${opts.PROJECT_NAME}`;

    return {
        entry: path.resolve(process.cwd(), `src/client.js`),
        output: {
            filename: `${APP_NAMESPACE}.js`,
            libraryTarget: 'system',
            path: path.resolve(process.cwd(), 'dist'),
            jsonpFunction: `webpackJsonp_${APP_NAMESPACE}`,
            devtoolNamespace: `${APP_NAMESPACE}`,
        },
        devtool: opts.IS_PROD ? null : 'source-map',
        devServer: {
            compress: true,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            disableHostCheck: true,
        },
        externals: [...opts.EXTERNALS],
        plugins: [
            new CleanWebpackPlugin(),
            new BundleAnalyzerPlugin({
                analyzerMode: opts.ANALYZE_MODE,
            }),
            new SystemJSPublicPathWebpackPlugin({
                systemjsModuleName: `@${opts.ORG_NAME}/${opts.PROJECT_NAME}`,
                rootDirectoryLevel: opts.SYSTEMJS_ROOT_DIR_LEVEL,
            }),
        ].filter(Boolean),
        resolve: {
            extensions: [
                '.js',
                '.mjs',
                '.jsx',
                '.wasm',
                '.json',
                '.scss',
                '.css',
            ],
        },
    };
};
