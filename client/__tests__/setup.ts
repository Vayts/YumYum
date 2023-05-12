import '@testing-library/jest-dom';

jest.mock('react-i18next', () => ({
	useTranslation: () => {
		return {
			t: jest.fn((value) => {
				return value;
			}),
		};
	},
}));
