import React, { ChangeEvent, useState } from 'react';
import { Title } from '@src/components/UI/Title/Title';
import {
  CreateRecipeBlock,
  CreateRecipeImgContentWrapper,
  CreateRecipeImgWrapper,
  CreateRecipeMainInfo,
  CreateRecipeMainInputs,
} from '@src/pages/CreateRecipePage/style';
import { FileUploader } from '@src/components/UI/FileUploader/FileUploader';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { useTranslation } from 'react-i18next';
import { EditPhoto } from '@src/components/EditPhoto/EditPhoto';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { ICreateRecipeMain } from '@src/pages/CreateRecipePage/CreateRecipeMain/types';
import { createRecipeMainInfoValidation } from '@src/validation/createRecipe.validation';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';
import { v4 as uuidv4 } from 'uuid';

export const CreateRecipeMain: React.FC<ICreateRecipeMain> = ({ mainInfo, setMainInfo }) => {
  const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
    isOpen: false,
    photo: null,
    photoBlob: null,
    width: 450,
    height: 281,
    border: 60,
    saveFunc: null,
    photoName: uuidv4(),
  });
  const { photo, touched, title, description, errors } = mainInfo;
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
        touched: {
          ...state.touched,
          [e.target.name]: true,
        },
        errors: {
          ...createRecipeMainInfoValidation({
            ...state,
            [e.target.name]: e.target.value,
          }),
        },
      };
    });
  };
  
  const openEditPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const photo = e.target.files[0];
      const photoBlob = URL.createObjectURL(photo);
      setEditPhoto((state) => {
        return {
          ...state,
          photo,
          photoBlob,
          isOpen: true,
          saveFunc: setMainPhotoHandler };
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
        <Input
          id='title'
          name='title'
          value={title}
          margin='0'
          onChange={(e) => changeHandler(e)}
          placeholder={`${t('recipeName')}`}
          label={`${t('recipeName')}`}
          fz={16}
          padding='10px'
          max={80}
          isValid={touched.title && !errors.title}
        />
        <ErrorMsg show={touched.title && !!errors.title} margin='5px 0 10px'>{errors.title}</ErrorMsg>
        <CreateRecipeMainInfo>
          <CreateRecipeImgContentWrapper>
            <CreateRecipeImgWrapper>
              <FileUploader
                id='mainPhoto'
                onChange={(e) => openEditPhoto(e)}
                name='mainPhoto'
                value={photo ? URL.createObjectURL(photo) : null}
                margin='0'
              />
            </CreateRecipeImgWrapper>
            <ErrorMsg show={touched.photo && !!errors.photo} margin='5px 0 0'>{errors.photo}</ErrorMsg>
          </CreateRecipeImgContentWrapper>
          <CreateRecipeMainInputs>
            <TextArea
              value={description}
              onChange={(e) => changeHandler(e)}
              name='description'
              id='asddf'
              height='100%'
              margin='0'
              padding='10px'
              fz={16}
              placeholder={t('recipeDescription')}
              isValid={touched.description && !errors.description}
              max={1500}
            />
            <ErrorMsg show={touched.description && !!errors.description} margin='5px 0 0'>{errors.description}</ErrorMsg>
          </CreateRecipeMainInputs>
        </CreateRecipeMainInfo>
      </CreateRecipeBlock>
    </>
  );
};
