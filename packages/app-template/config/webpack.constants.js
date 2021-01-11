module.exports = (env, argv) => ({
    // The name of the application
    PROJECT_NAME: 'app-template',
    // The name of the organization to which the application belongs
    ORG_NAME: 'publicis-sapient',
    // The modules that are provided by CDN and not part of the final client/server package
    // https://webpack.js.org/configuration/externals/
    EXTERNALS: [
        'single-spa',
        'react',
        'react-dom',
        'react-redux',
        '@reduxjs/toolkit',
    ],
    // Check if environment is production
    IS_PROD: argv.p || argv.mode === 'production',
    // Analyze mode for source files
    ANALYZE_MODE: env.analyze ? 'server' : 'disabled',
    SYSTEMJS_ROOT_DIR_LEVEL: 1,
});
