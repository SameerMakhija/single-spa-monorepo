module.exports = {
    rootDir: 'src',
    transform: {
        '^.+\\.(j|t)sx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(sc|sa|c)ss$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [
        '../node_modules/@testing-library/jest-dom/dist/index.js',
    ],
    coveragePathIgnorePatterns: [
        '/src/client.js',
        '/src/server.js',
        '(.scss|.css)$',
        '/components/.*/index.js',
        '__tests__/test-utils.js',
    ],
    testPathIgnorePatterns: ['__tests__/test-utils.js'],
};
