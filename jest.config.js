module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config', './src/setup-tests.ts'],
  collectCoverageFrom: ['src/**/*.{ts,js}', '!src/__test__/**/*.[jt]s', '!src/**/__test__/**/*.[jt]s', '!src/faker/**/*.[jt]s'],
  testMatch: ['**/__test__/**/*.spec.[jt]s?(x)', '**/?(*.)+(spec|it|test).[jt]s?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios)/)'
  ],
};
