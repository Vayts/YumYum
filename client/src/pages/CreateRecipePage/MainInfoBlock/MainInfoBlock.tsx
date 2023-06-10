import React, { ChangeEvent, useCallback, useState } from 'react';
import { IMainInfoBlockProps } from '@src/pages/CreateRecipePage/MainInfoBlock/types';
import { CreateRecipeBlock } from '@src/pages/CreateRecipePage/style';
import { v4 as uuidv4 } from 'uuid';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import Title from '@src/components/UI/Title/Title';
import Input from '@src/components/UI/Input/Input';
import { useTranslation } from 'react-i18next';
import TextArea from '@src/components/UI/TextArea/TextArea';
import FileUploader from '@src/components/UI/FileUploader/FileUploader';
import EditPhoto from '@src/components/EditPhoto/EditPhoto';
import ErrorMsg from '@src/components/UI/ErrorMsg/ErrorMsg';
import { createRecipeMainInfoValidation } from '@src/validation/createRecipe.validation';

const editPhotoInitial = {
  isOpen: false,
  photo: null,
  photoBlob: null,
  width: 450,
  height: 281,
  border: 60,
  saveFunc: null,
  photoName: uuidv4(),
};

const MainInfoBlock: React.FC<IMainInfoBlockProps> = ({ mainInfo, setMainInfo }) => {
  const { title, errors, touched, description, photo } = mainInfo;
  const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>(editPhotoInitial);
  const { t } = useTranslation();
  
  const changeHandler = useCallback((e) => {
    setMainInfo((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
        errors: createRecipeMainInfoValidation({
          ...prev,
          [e.target.name]: e.target.value,
        }),
        touched: {
          ...prev.touched,
          [e.target.name]: true,
        },
      };
    });
  }, []);
  
  const setMainPhotoHandler = useCallback((photo: any) => {
    setMainInfo((state) => {
      return {
        ...state,
        photo,
      };
    });
  }, []);
  
  const openEditPhoto = useCallback((e: ChangeEvent<HTMLInputElement>) => {
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
  }, []);
  
  return (
    <CreateRecipeBlock>
      <Title fz={18} fw={500} margin='0 0 20px'>{t('mainInfo')}</Title>
      {editPhotoState.isOpen
        ? (
          <EditPhoto
            state={editPhotoState}
            setState={setEditPhoto}
          />
        ) : null}
      <FileUploader
        id='mainPhoto'
        onChange={openEditPhoto}
        name='mainPhoto'
        value={photo ? URL.createObjectURL(photo) : null}
        margin='0 0 20px'
        height='281px'
        width="450px"
      />
      <Input
        id='title'
        name='title'
        value={title}
        margin='0'
        onChange={changeHandler}
        placeholder={`${t('recipeName')}`}
        label={`${t('recipeName')}`}
        fz={16}
        padding='10px'
        max={80}
        isValid={touched.title && !errors.title}
      />
      <ErrorMsg show={touched.title && !!errors.title} margin='5px 0 10px'>{errors.title}</ErrorMsg>
      <TextArea
        value={description}
        onChange={changeHandler}
        name='description'
        id='asddf'
        height='300px'
        margin='0'
        padding='10px'
        fz={16}
        label={t('recipeDescription')}
        placeholder={t('recipeDescription')}
        isValid={touched.description && !errors.description}
        max={1500}
      />
      <ErrorMsg show={touched.description && !!errors.description} margin='5px 0 0'>{errors.description}</ErrorMsg>
    </CreateRecipeBlock>
  );
};

export default MainInfoBlock;
