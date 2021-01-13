const path = require('path');
const webpackMerge = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react');
const webpackSettings = require('./webpack.settings');

module.exports = (webpackConfigEnv, argv) => {
    const settings = webpackSettings(webpackConfigEnv, argv);
    const defaultConfig = singleSpaDefaults({
        orgName: settings.ORG_NAME,
        projectName: settings.PROJECT_NAME,
        webpackConfigEnv,
        argv,
        standaloneOptions: {
            importMap: {
                imports: settings.EXTERNALS,
            },
        },
    });

    // Filter out unwanted OOTB plugins
    defaultConfig.plugins = defaultConfig.plugins
        .filter((p) => p.constructor.name !== 'CleanWebpackPlugin')
        .filter((p) => p.constructor.name !== 'UnusedFilesWebpackPlugin');

    return webpackMerge.smart(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        entry: path.join(__dirname, 'src/client.js'),
        output: {
            filename: `${settings.ORG_NAME}-${settings.PROJECT_NAME}.client.js`,
        },
        externals: Object.keys(settings.EXTERNALS),
        module: {
            rules: [
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
                        'sass-loader',
                    ],
                },
            ],
        },
    });
};
