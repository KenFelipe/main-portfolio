module.exports = {
  setupFilesAfterEnv: ['./.jest/setupTests.js'],

  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/.out/',
    '/public/',
    '/template/',
  ],

  moduleNameMapper: {
    '^@/atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@/molecules/(.*)$':
      '<rootDir>/src/components/molecules/$1',
    '^@/organisms/(.*)$':
      '<rootDir>/src/components/organisms/$1',
    '^@/templates/(.*)$':
      '<rootDir>/src/components/templates/$1',
    '^@/api/(.*)$': '<rootDir>/src/api/$1',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
  },
}
