import styled from 'styled-components';
import { ICreateContentPhotoTextBlockStyle } from '@src/pages/CreateRecipePage/ContentBlocks/CreatePhotoTextContentBlock/types';

export const ContentPhotoTextBlockWrapper = styled.div`
	display: flex;
`;

export const ContentPhotoTextBlockImgWrapper = styled.div<ICreateContentPhotoTextBlockStyle>`
	margin: ${({ photoPosition }) => (photoPosition === 'left' ? '0 20px 0 0' : '0 0 0 20px')};
  order: ${({ photoPosition }) => (photoPosition === 'right' ? 2 : 1)};
`;

export const ContentPhotoTextBlockImgHolder = styled.div`
  width: 400px;
  height: 400px;
`;

export const ContentPhotoTextBlockInputsWrapper = styled.div<ICreateContentPhotoTextBlockStyle>`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  order: ${({ photoPosition }) => (photoPosition === 'right' ? 1 : 2)};
`;
