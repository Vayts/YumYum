export interface IEditPhoto {
	state: IEditPhotoState,
	setState: { (any: any) : void } | null,
}

export interface IEditPhotoState {
	isOpen: boolean,
	width: number,
	height: number,
	photo: string | null,
	photoName?: string,
	saveFunc: { (any: any) : void } | null,
	border?: number,
}

export interface IEditPhotoStyle {
	width: number,
	border?: number,
}
