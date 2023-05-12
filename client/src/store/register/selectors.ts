import { RootState } from '@src/store';
import { IRegisterState } from '@src/store/register/types';

export const selectRegisterData = (state: RootState): IRegisterState['data'] => state.register.data;
export const selectRegisterErrors = (state: RootState): Record<string, string> => state.register.errors;
export const selectRegisterTouched = (state: RootState): Record<string, boolean> => state.register.touched;
export const selectRegisterLoading = (state: RootState): boolean => state.register.isLoading;
