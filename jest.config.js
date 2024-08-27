import { defaults } from "jest-config";

export default {
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 83,
      functions: 85,
      lines: 90,
      statements: -10,
    },
  },
  displayName: {
    color: "blue",
    name: "Print Header & Footer",
  },
  moduleNameMapper: { "\\.(css|less|scss|sass)$": "identity-obj-proxy" },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  testMatch: [
      "**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  transform: { "^.+\\.tsx?$": "ts-jest" },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
