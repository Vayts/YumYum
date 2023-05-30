import styled from 'styled-components';
import { IContentPhotoTextBlockStyle } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoTextBlock/types';

export const ContentPhotoTextBlockWrapper = styled.div`
	display: flex;
`;

export const ContentPhotoTextBlockImgWrapper = styled.div<IContentPhotoTextBlockStyle>`
	margin: ${({ photoPosition }) => (photoPosition === 'left' ? '0 20px 0 0' : '0 0 0 20px')};
  order: ${({ photoPosition }) => (photoPosition === 'right' ? 2 : 1)};
`;

export const ContentPhotoTextBlockImgHolder = styled.div`
  width: 400px;
  height: 400px;
`;

export const ContentPhotoTextBlockInputsWrapper = styled.div<IContentPhotoTextBlockStyle>`
	flex-grow: 1;
  display: flex;
  flex-direction: column;
  order: ${({ photoPosition }) => (photoPosition === 'right' ? 1 : 2)};

  div:last-child {
    flex-grow: 1;
  }
`;
