import React, { ChangeEvent, memo, useCallback, useState } from 'react';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import { useTranslation } from 'react-i18next';
import FileUploader from '@src/components/UI/FileUploader/FileUploader';
import Input from '@src/components/UI/Input/Input';
import EditPhoto from '@src/components/EditPhoto/EditPhoto';
import ErrorMsg from '@src/components/UI/ErrorMsg/ErrorMsg';
import { ICreateContentBlockWithPhotoProps } from '@src/pages/CreateRecipePage/ContentBlocks/types';
import Title from '@src/components/UI/Title/Title';
import { ContentBlockItem } from '@src/pages/CreateRecipePage/ContentBlocks/style';

const CreatePhotoContentBlock: React.FC<ICreateContentBlockWithPhotoProps> = ({ contentBlock, onChange, onPhotoSave, index }) => {
  const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
    isOpen: false,
    photo: null,
    photoBlob: null,
    width: 512,
    height: 200,
    border: 60,
    saveFunc: null,
    photoName: contentBlock.id,
  });
  const [photoBlob, setPhotoBlob] = useState<null | string>(null);
  const { content, id, touched, errors, type } = contentBlock;
  const { photoDescription, photo } = content;
  const { t } = useTranslation();
  
  const changeHandler = useCallback((e) => {
    onChange(e, id);
  }, []);
  
  const setPhotoHandler = (photo: any) => {
    onPhotoSave(photo, id);
    setPhotoBlob(URL.createObjectURL(photo));
  };
  
  const openEditPhoto = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
      const photo = e.target.files[0];
      const photoBlob = URL.createObjectURL(photo);
      setEditPhoto((prev) => {
        return {
          ...prev,
          photo,
          photoBlob,
          isOpen: true,
          saveFunc: setPhotoHandler };
      });
      return true;
    }
    return false;
  }, []);
  
  return (
    <ContentBlockItem>
      <Title fz={18} fw={500} margin='0 0 20px'>
        {`${t('contentBlockNumber', { value: index + 1 })} - ${t(type)}`}
      </Title>
      {editPhotoState.isOpen
        ? (
          <EditPhoto
            state={editPhotoState}
            setState={setEditPhoto}
          />
        ) : null}
      <FileUploader
        id={`contentBlock${id}Photo`}
        onChange={openEditPhoto}
        name='photo'
        value={photoBlob}
        margin='0'
        height='576px'
        width='1400px'
      />
      <Input
        id={`contentBlock${id}photoDescription`}
        name='photoDescription'
        value={photoDescription}
        margin='15px 0 0'
        onChange={changeHandler}
        placeholder={`${t('smallPhotoDescription')} (${t('optionalІSmall')})`}
        fz={16}
        padding='10px'
        max={50}
        isValid={touched.photoDescription && !errors.photoDescription}
      />
      <ErrorMsg show={touched.photoDescription && !!errors.photoDescription} margin='5px 0 0'>{errors.photoDescription}</ErrorMsg>
    </ContentBlockItem>
  );
};

export default memo(CreatePhotoContentBlock);
