/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/styleMock.js'
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [
    '<rootDir>/src/setupTests.ts'
  ],
  testEnvironment: 'jsdom',
};