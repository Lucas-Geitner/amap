module.exports = function(w: any) {
  return {
    files: ['components/*.tsx', 'intelligence/*tsx', 'lib/test-utils.tsx'],
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
