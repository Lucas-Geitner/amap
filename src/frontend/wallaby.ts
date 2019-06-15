module.exports = function(w) {
  return {
    files: ['components/*.tsx'],
    testFramework: 'jest',
    env: {
      type: 'node',
      runner: 'node',
    },

    tests: ['__tests__/*test.tsx'],
    compilers: {
      '**/*.ts?(x)': w.compilers.babel({}),
    },
  };
};
