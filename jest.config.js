
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?|ts?)$'
const path = require('path')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@App/(.*)$': '<rootDir>/app/$1',
    '^@TestUtils/(.*)$': '<rootDir>/jest/$1',
  },
  transformIgnorePatterns: [
    // "/node_modules/(?!(@remix-run|@web-std)/).+\\.js$",
    // "/node_modules/(?!(@remix-run|@web-std)/).+\\.ts$",
    // "/node_modules/(?!(@remix-run|@web-std)/).+\\.tsx$",
    "/node_modules/(?!(@remix-run/web-fetch|@remix-run/web-blob|@remix-run/web-stream|@remix-run/web-form-data|@remix-run/web-file|@web3-storage/multipart-parser)/)"
  ],
  transform: {
    "^.+\\.(js|ts)$": "ts-jest",
  },
  // transform: {
  //   "\\.[jt]sx?$": [
  //     "babel-jest",

  //     { configFile: "./babel.config.js" },
  //   ],
  // },
  moduleDirectories: ['node_modules', path.join(__dirname, 'jest')],
  moduleFileExtensions: [
    'js',
    "ts",
    "tsx",
    "json",
    "node"
  ],
  setupFiles: ["<rootDir>/jest/setup-tests.ts"],
  setupFilesAfterEnv:[
    '@testing-library/jest-dom/extend-expect',
  ],
  testRegex: TEST_REGEX,
  rootDir: "./",
  verbose: true,
  globals: {
    "ts-jest": {
      diagnostics: true,
      tsconfig: true
    }
  },
  collectCoverage: false,
  collectCoverageFrom: [
    "<rootDir>/app/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/.github/**",
    "!**/.cache/**",
    "!**/.vscode/**",
    "!**/githubActions/**",
    "!**/plugins/**",
    "!**/public/**",
    "!**/redirects/**",
    "!**/styles/**",
  ],
  coverageReporters:["text-summary", ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
