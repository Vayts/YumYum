import { render } from '@testing-library/react';
import React from 'react';
import { Description } from '@src/components/UI/Description/Description';
import { ThemeProvider } from 'styled-components';
import { THEMES } from '@constants/themes';

describe('Description', () => {
	it('should render Description with correct text', () => {
		const text = 'Test Description';
		const { getByText } = render(<Description>{text}</Description>);
		const description = getByText(text);
		expect(description).toBeInTheDocument();
	});
	it('should render Description with correct style', () => {
		const text = 'Test Description';
		const component = (
			<ThemeProvider theme={THEMES.light}>
				<Description
					margin="5px 10px"
					fz="15px"
					color="red"
					height='20px'
					align='center'
				>
					{text}
				</Description>
			</ThemeProvider>
		);
		const { getByText } = render(component);
		const description = getByText(text);
		expect(description).toHaveStyle('font-size: 15px, margin: 5px 10px, color: red, height: 20px, align: center;');
	});
});
