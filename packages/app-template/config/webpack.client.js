/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');
const webpackConst = require('./webpack.constants');

module.exports = (webpackConfigEnv, argv) => {
    const opts = webpackConst(webpackConfigEnv, argv);
    const APP_NAMESPACE = `${opts.ORG_NAME}-${opts.PROJECT_NAME}`;

    return {
        mode: opts.IS_PROD ? 'production' : 'development',
        entry: path.resolve(process.cwd(), `src/client.js`),
        output: {
            filename: `${APP_NAMESPACE}.client.js`,
            libraryTarget: 'system',
            path: path.resolve(process.cwd(), 'dist'),
            devtoolNamespace: `${APP_NAMESPACE}`,
        },
        devtool: opts.IS_PROD ? false : 'source-map',
        devServer: {
            compress: true,
            historyApiFallback: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            disableHostCheck: true,
        },
        externals: [...opts.EXTERNALS],
        module: {
            rules: [
                {
                    parser: {
                        system: false,
                    },
                },
                {
                    test: /\.(js)x?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(sc|sa|c)ss$/i,
                    include: [/node_modules/, /src/],
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: ['autoprefixer'],
                                },
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
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
