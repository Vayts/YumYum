import React, { SetStateAction } from 'react';

export interface ICreateRecipeMainInfo {
  photo: File,
  title: string,
  description: string,
  errors: Record<string, string>,
  touched: Record<string, boolean>
}

export interface ICreateRecipeMainInfoCompleted {
  photo: Blob | MediaSource,
  title: string,
  description: string,
  errors: Record<string, string>,
  touched: Record<string, boolean>
}

export interface ICreateRecipeMain {
  mainInfo: ICreateRecipeMainInfo,
  setMainInfo: React.Dispatch<SetStateAction<ICreateRecipeMainInfo>>
}
