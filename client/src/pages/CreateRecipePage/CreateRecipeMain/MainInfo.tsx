import React, { useState } from 'react';
import { Title } from '@src/components/UI/Title/Title';
import { CreateRecipeBlock, CreateRecipeImgWrapper, CreateRecipeMainInfo, CreateRecipeMainInputs } from '@src/pages/CreateRecipePage/style';
import { FileUploader } from '@src/components/UI/FileUploader/FileUploader';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { useTranslation } from 'react-i18next';
import { EditPhoto } from '@src/components/EditPhoto/EditPhoto';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { Description } from '@src/components/UI/Description/Description';

export const CreateRecipeMain: React.FC = () => {
	const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
		isOpen: false,
		photo: null,
		width: 450,
		height: 281,
		border: 60,
		saveFunc: null,
	});
	const [mainInfo, setMainInfo] = useState({
		photo: null,
		title: '',
		description: '',
		ingredients: [],
	});
	const [mainPhoto, setMainPhoto] = useState(null);
	const { t } = useTranslation();
	const setMainPhotoHandler = (photo) => {
		setMainPhoto(URL.createObjectURL(photo));
	};
	
	const changeHandler = (e) => {
		setMainInfo((state) => {
			return { ...state, [e.target.name]: e.target.value };
		});
	};
	
	const openEditPhoto = (e) => {
		if (e.target.files[0]) {
			const value = URL.createObjectURL(e.target.files[0]);
			setEditPhoto((state) => {
				return { ...state, photo: value, isOpen: true, saveFunc: setMainPhotoHandler };
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
			<CreateRecipeBlock>
				<Title fz={18} fw={500}>{t('mainInfo')}</Title>
				<CreateRecipeMainInfo>
					<CreateRecipeImgWrapper>
						<FileUploader
							onChange={(e) => openEditPhoto(e)}
							name='mainPhoto'
							value={mainPhoto}
							margin='0'
						/>
					</CreateRecipeImgWrapper>
					<CreateRecipeMainInputs>
						<Input
							id='title'
							name='title'
							value={mainInfo.title}
							margin='0'
							onChange={(e) => changeHandler(e)}
							placeholder={`${t('recipeName')}*`}
							fz={16}
							padding='10px'
						/>
						<TextArea
							value={mainInfo.description}
							onChange={(e) => changeHandler(e)}
							name='description'
							id='asddf'
							height='100%'
							margin='15px 0 0'
							padding='10px'
							fz={16}
							placeholder='Опис рецепту'
						/>
					</CreateRecipeMainInputs>
				</CreateRecipeMainInfo>
				<Title fz={18} fw={500} margin='40px 0 0'>{t('ingredients')}</Title>
				<Description>Додайте основні інгредієнти страви</Description>
			</CreateRecipeBlock>
		</>
	);
};
