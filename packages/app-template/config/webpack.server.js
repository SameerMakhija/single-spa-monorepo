/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpackConst = require('./webpack.constants');

module.exports = (webpackConfigEnv, argv) => {
    const opts = webpackConst(webpackConfigEnv, argv);
    const APP_NAMESPACE = `${opts.ORG_NAME}-${opts.PROJECT_NAME}`;

    return {
        mode: opts.IS_PROD ? 'production' : 'development',
        entry: path.resolve(process.cwd(), `src/server.js`),
        output: {
            filename: `${APP_NAMESPACE}.server.js`,
            libraryTarget: 'umd',
            path: path.resolve(process.cwd(), 'dist'),
            devtoolNamespace: `${APP_NAMESPACE}`,
        },
        devtool: opts.IS_PROD ? false : 'source-map',
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
