import React, { ChangeEvent, useState } from 'react';
import { Title } from '@src/components/UI/Title/Title';
import { CreateRecipeBlock, CreateRecipeImgWrapper, CreateRecipeMainInfo, CreateRecipeMainInputs } from '@src/pages/CreateRecipePage/style';
import { FileUploader } from '@src/components/UI/FileUploader/FileUploader';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { useTranslation } from 'react-i18next';
import { EditPhoto } from '@src/components/EditPhoto/EditPhoto';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { useAppSelector } from '@src/hooks/hooks';
import { selectMainInfo } from '@src/store/createRecipe/selector';
import { ICreateRecipeMain } from '@src/pages/CreateRecipePage/CreateRecipeMain/types';

export const CreateRecipeMain: React.FC<ICreateRecipeMain> = ({ mainInfo, setMainInfo }) => {
	const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
		isOpen: false,
		photo: null,
		width: 450,
		height: 281,
		border: 60,
		saveFunc: null,
	});
	const { title, description } = useAppSelector(selectMainInfo);
	const { t } = useTranslation();
	
	const setMainPhotoHandler = (photo: any) => {
		setMainInfo((state) => {
			return {
				...state,
				photo,
			};
		});
	};
	
	const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setMainInfo((state) => {
			return {
				...state,
				[e.target.name]: e.target.value,
			};
		});
	};
	
	const openEditPhoto = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target?.files && e.target.files[0]) {
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
				<Title fz={18} fw={500} margin='0 0 20px'>{t('mainInfo')}</Title>
				<CreateRecipeMainInfo>
					<CreateRecipeImgWrapper>
						<FileUploader
							id='mainPhoto'
							onChange={(e) => openEditPhoto(e)}
							name='mainPhoto'
							value={mainInfo.photo ? URL.createObjectURL(mainInfo.photo) : null}
							margin='0'
						/>
					</CreateRecipeImgWrapper>
					<CreateRecipeMainInputs>
						<Input
							id='title'
							name='title'
							value={title}
							margin='0'
							onChange={(e) => changeHandler(e)}
							placeholder={`${t('recipeName')}*`}
							fz={16}
							padding='10px'
						/>
						<TextArea
							value={description}
							onChange={(e) => changeHandler(e)}
							name='description'
							id='asddf'
							height='100%'
							margin='15px 0 0'
							padding='10px'
							fz={16}
							placeholder={t('recipeDescription')}
						/>
					</CreateRecipeMainInputs>
				</CreateRecipeMainInfo>
			</CreateRecipeBlock>
		</>
	);
};
