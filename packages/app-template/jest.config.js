module.exports = {
    rootDir: './',
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
    },
    moduleNameMapper: {},
    setupFilesAfterEnv: [
        './node_modules/@testing-library/jest-dom/dist/index.js',
    ],
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/coverage/',
        '/src/client.js',
        '/src/server.js',
        '(.scss|.css)$',
        '/components/.*/index.js',
    ],
    testPathIgnorePatterns: ['/node_modules/', '__tests__/test-utils.js'],
};
