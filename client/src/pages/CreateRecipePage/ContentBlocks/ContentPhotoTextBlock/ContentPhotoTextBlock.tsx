import React, { ChangeEvent, useState } from 'react';
import { FileUploader } from '@src/components/UI/FileUploader/FileUploader';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import {
	ContentPhotoTextBlockImgHolder,
	ContentPhotoTextBlockImgWrapper, ContentPhotoTextBlockInputsWrapper,
	ContentPhotoTextBlockWrapper,
} from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoTextBlock/style';
import { Input } from '@src/components/UI/Input/Input';
import { IContentPhotoTextBlockProps } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoTextBlock/types';
import { useTranslation } from 'react-i18next';
import {
	ContentBlockControlsWrapper,
	ContentBlockRadio,
	ContentBlockRadioLabel,
	ContentBlockRadioWrapper,
} from '@src/pages/CreateRecipePage/ContentBlocks/style';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { EditPhoto } from '@src/components/EditPhoto/EditPhoto';

export const ContentPhotoTextBlock: React.FC<IContentPhotoTextBlockProps> = ({ content, id, onChangeHandler }) => {
	const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
		isOpen: false,
		photo: null,
		width: 400,
		height: 400,
		border: 60,
		saveFunc: null,
	});
	const { photoDescription, photo, photoPosition, description, title } = content;
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
			<ContentBlockControlsWrapper>
				<ContentBlockRadioWrapper>
					<ContentBlockRadio
						id={`contentBlock${id}PhotoPositionLeft`}
						onChange={(e) => onChangeHandler('photoPosition', e.target.value, id)}
						name={`contentBlock${id}PhotoPosition`}
						value='left'
						checked={photoPosition === 'left'}
					/>
					<ContentBlockRadioLabel htmlFor={`contentBlock${id}PhotoPositionLeft`}>{t('photoLeft')}</ContentBlockRadioLabel>
				</ContentBlockRadioWrapper>
				<ContentBlockRadioWrapper>
					<ContentBlockRadio
						id={`contentBlock${id}PhotoPositionRight`}
						onChange={(e) => onChangeHandler('photoPosition', e.target.value, id)}
						name={`contentBlock${id}PhotoPosition`}
						value='right'
						checked={photoPosition === 'right'}
					/>
					<ContentBlockRadioLabel htmlFor={`contentBlock${id}PhotoPositionRight`}>{t('photoRight')}</ContentBlockRadioLabel>
				</ContentBlockRadioWrapper>
			</ContentBlockControlsWrapper>
			<ContentPhotoTextBlockWrapper>
				<ContentPhotoTextBlockImgWrapper photoPosition={photoPosition}>
					<ContentPhotoTextBlockImgHolder>
						<FileUploader
							id={`contentBlock${id}Photo`}
							onChange={(e) => openEditPhoto(e)}
							name='photo'
							value={photo ? URL.createObjectURL(photo) : null}
							margin='0'
						/>
					</ContentPhotoTextBlockImgHolder>
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
				</ContentPhotoTextBlockImgWrapper>
				<ContentPhotoTextBlockInputsWrapper photoPosition={content.photoPosition}>
					<Input
						id={`contentBlock${id}title`}
						name='title'
						value={title}
						margin='0'
						onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
						placeholder={t('title')}
						fz={16}
						padding='10px'
					/>
					<TextArea
						value={description}
						onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
						name='description'
						id={`contentBlock${id}Description`}
						height='100%'
						margin='15px 0 0'
						padding='10px'
						fz={16}
						placeholder={t('text')}
					/>
				</ContentPhotoTextBlockInputsWrapper>
			</ContentPhotoTextBlockWrapper>
		</>
	);
};
