import { RootState } from '@src/store';

export const selectModalType = (state: RootState): string => state.modal.type;

export const selectModalContent = (state: RootState): Record<string, any> => state.modal.content;
