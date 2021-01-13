module.exports = (env, argv) => ({
    // The name of the organization to which the application belongs
    ORG_NAME: 'publicis-sapient',
    // The name of the application
    PROJECT_NAME: 'app-scaffold',
    // The modules that are provided by CDN and not part of the final client/server package
    // https://webpack.js.org/configuration/externals/
    EXTERNALS: {
        'single-spa':
            'https://cdn.jsdelivr.net/npm/single-spa@5.8.3/lib/system/single-spa.min.js',
        react:
            'https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js',
        'react-dom':
            'https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js',
        redux: 'https://cdn.jsdelivr.net/npm/redux@4.0.5/dist/redux.min.js',
        'react-redux':
            'https://cdn.jsdelivr.net/npm/react-redux@7.2.2/dist/react-redux.min.js',
        reselect:
            'https://cdn.jsdelivr.net/npm/reselect@4.0.0/dist/reselect.min.js',
        '@reduxjs/toolkit':
            'https://cdn.jsdelivr.net/npm/@reduxjs/toolkit@1.5.0/dist/redux-toolkit.umd.min.js',
    },
});
