import { IContentFiller } from '@src/types/createRecipe.types';

export const CONTENT_BLOCK_TYPES = {
  PHOTO: 'photo',
  PHOTO_TEXT: 'photoText',
  TEXT: 'text',
};

export const CONTENT_BLOCKS: IContentFiller[] = [
  {
    type: CONTENT_BLOCK_TYPES.PHOTO,
    content: {
      photo: null,
      photoDescription: '',
    },
  },
  {
    type: CONTENT_BLOCK_TYPES.PHOTO_TEXT,
    content: {
      photoPosition: 'left',
      photo: undefined,
      photoDescription: '',
      title: '',
      description: '',
    },
  },
  {
    type: CONTENT_BLOCK_TYPES.TEXT,
    content: {
      title: '',
      description: '',
    },
  },
];
