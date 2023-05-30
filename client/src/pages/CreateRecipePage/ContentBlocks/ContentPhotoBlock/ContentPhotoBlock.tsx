import React, { ChangeEvent, useState } from 'react';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { useTranslation } from 'react-i18next';
import { IContentPhotoBlockProps } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoBlock/types';
import { ContentPhotoBlockImgHolder, ContentPhotoBlockWrapper } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoBlock/style';
import { FileUploader } from '@src/components/UI/FileUploader/FileUploader';
import { Input } from '@src/components/UI/Input/Input';
import { EditPhoto } from '@src/components/EditPhoto/EditPhoto';

export const ContentPhotoBlock: React.FC<IContentPhotoBlockProps> = ({ content, id, onChangeHandler }) => {
	const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
		isOpen: false,
		photo: null,
		width: 512,
		height: 200,
		border: 60,
		saveFunc: null,
	});
	const { photoDescription, photo } = content;
	const { t } = useTranslation();
	
	const setPhotoHandler = (photo: any) => {
		onChangeHandler('photo', photo, id);
	};
	
	const openEditPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files && e.target.files[0]) {
			const value = URL.createObjectURL(e.target.files[0]);
			setEditPhoto((state) => {
				return { ...state, photo: value, isOpen: true, saveFunc: setPhotoHandler };
			});
			return true;
		}
		return false;
	};
	
	return (
		<>
			{editPhotoState.isOpen
				? (
					<EditPhoto
						state={editPhotoState}
						setState={setEditPhoto}
					/>
				) : null}
			<ContentPhotoBlockWrapper>
				<ContentPhotoBlockImgHolder>
					<FileUploader
						id={`contentBlock${id}Photo`}
						onChange={(e) => openEditPhoto(e)}
						name='photo'
						value={photo ? URL.createObjectURL(photo) : null}
						margin='0'
					/>
				</ContentPhotoBlockImgHolder>
				<Input
					id={`contentBlock${id}photoDescription`}
					name='photoDescription'
					value={photoDescription}
					margin='15px 0 0'
					onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
					placeholder={`${t('smallPhotoDescription')} (${t('optionalІSmall')})`}
					fz={16}
					padding='10px'
					max={50}
				/>
			</ContentPhotoBlockWrapper>
		</>
	);
};
