module.exports = {
	collectCoverage: false,
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
	],
	globals: {
		window: true,
	},
	collectCoverageFrom: ['**/*.jsx', '**/*.js', '**/*.tsx', '**/*.ts'],
	moduleDirectories: ['node_modules', '.', 'src'],
	testMatch: ['**/*.test.{js,jsx,ts,tsx}'],
	coverageReporters: [
		'json',
		'lcov',
	],
	setupFilesAfterEnv: ['<rootDir>/__tests__/setup.ts'],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/public/',
		'/dist/',
		'jest.config.js',
		'package.json',
		'webpack.config.js',
		'/coverage/',
		'index.tsx',
		'src/store/index.ts',
		'src/store/sagas.ts',
	],
	moduleNameMapper: {
		'^.+\\.(css|scss)$': 'identity-obj-proxy',
		'^@src/(.*)$': '<rootDir>src/$1',
		'^@constants/(.*)$': '<rootDir>src/constants/$1',
		// '^common-app/(.*)$': '/src/common-app/$1',
		// '^core/(.*)$': '/src/core/$1',
		// '^layout/(.*)$': '/src/layout/$1',
		// '^pods/(.*)$': '/src/pods/$1',
		// '^scenes/(.*)$': '/src/scenes/$1'
	},
	testEnvironment: 'jsdom',
};
