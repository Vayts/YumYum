import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	max-width: 1440px;
	padding: 0 15px;
	margin: 0 auto;
`;

export const LayoutMainContent = styled.div`
	display: flex;
  position: relative;
	flex-grow: 1;
`;

export const LayoutOutletWrapper = styled.div`
	padding: 20px 20px 20px 100px;
	height: 100vh;
	flex-grow: 1;
	overflow: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */

  ::-webkit-scrollbar-thumb {
    width: 10px;
    background: ${({ theme }) => theme.primary};
  }

  /* Handle on hover */

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.hover};
  }
`;
