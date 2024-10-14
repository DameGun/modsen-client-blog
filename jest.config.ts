import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    'db.json': '<rootDir>/src/__mocks__/db.json',
  },
  testMatch: ['<rootDir>/src/__tests__/**/*.test.(ts|tsx)'],
};

export default createJestConfig(config);
