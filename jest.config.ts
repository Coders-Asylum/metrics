import type { Config } from "jest";
const config: Config = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "./coverage",
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**", "!**/dist/**", "!**/jest.config.ts","!**/tests/**"],
  coverageReporters: ["lcov", "text-summary", "text"],
  detectLeaks: true,
  preset: "ts-jest",
  testEnvironment: "node",
};

export default config;
