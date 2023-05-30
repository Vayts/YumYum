import React, { SetStateAction } from 'react';

export interface ICreateRecipeMainInfo {
	photo: Blob | MediaSource | null,
	title: string,
	description: string,
}

export interface ICreateRecipeMain {
	mainInfo: ICreateRecipeMainInfo,
	setMainInfo: React.Dispatch<SetStateAction<ICreateRecipeMainInfo>>
}
