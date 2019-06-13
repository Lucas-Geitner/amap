module.exports = function (wallaby) {
    return {
        files: [
            '**/*.ts',
            '!/__tests__/*.test.ts',
            'tsconfig.json',
            'package.json' // <--
        ],
        tests: [
            '**/*.test.ts'
        ],
        env: {
            type: 'node'
        },
        testFramework: 'jest',
        debug: false,

        setup: function (wallaby) {
            var jestConfig = require('./package.json').jest;
            delete jestConfig.transform; // <--
            wallaby.testFramework.configure(jestConfig);
        }
    };
}
