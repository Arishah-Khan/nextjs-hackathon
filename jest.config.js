module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', '<rootDir>/'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript
      '^.+\\.js$': 'babel-jest',     // Transform JavaScript files
    },
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    moduleNameMapper: {
      '\\.module\\.css$': 'identity-obj-proxy',  // Handle CSS modules
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],  // Correct the path here
  };
  