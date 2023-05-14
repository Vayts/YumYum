export interface IEditPhoto {
	state: {
		isOpen: boolean,
		width: number,
		height: number,
		photo: string,
		saveFunc: (any) => void,
		border?: number,
	}
	setState: (state) => void,
}

export interface IEditPhotoState {
	isOpen: boolean,
	width: number,
	height: number,
	photo: string,
	saveFunc: (any) => void,
	border?: number,
}

export interface IEditPhotoStyle {
	width: number,
	border?: number,
}
