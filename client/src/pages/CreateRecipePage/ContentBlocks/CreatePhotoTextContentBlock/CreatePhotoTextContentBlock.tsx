import React, { ChangeEvent, memo, useCallback, useState } from 'react';
import { ICreateContentBlockWithPhotoProps } from '@src/pages/CreateRecipePage/ContentBlocks/types';
import { useTranslation } from 'react-i18next';
import { IEditPhotoState } from '@src/components/EditPhoto/types';
import EditPhoto from '@src/components/EditPhoto/EditPhoto';
import {
  ContentBlockControlsWrapper,
  ContentBlockItem,
  ContentBlockRadio,
  ContentBlockRadioLabel,
} from '@src/pages/CreateRecipePage/ContentBlocks/style';
import {
  ContentPhotoTextBlockImgWrapper, ContentPhotoTextBlockInputsWrapper,
  ContentPhotoTextBlockWrapper,
} from '@src/pages/CreateRecipePage/ContentBlocks/CreatePhotoTextContentBlock/style';
import FileUploader from '@src/components/UI/FileUploader/FileUploader';
import Input from '@src/components/UI/Input/Input';
import ErrorMsg from '@src/components/UI/ErrorMsg/ErrorMsg';
import TextArea from '@src/components/UI/TextArea/TextArea';
import Title from '@src/components/UI/Title/Title';

const CreatePhotoTextContentBlock: React.FC<ICreateContentBlockWithPhotoProps> = ({ contentBlock, index, onChange, onPhotoSave }) => {
  const [editPhotoState, setEditPhoto] = useState<IEditPhotoState>({
    isOpen: false,
    photo: null,
    photoBlob: null,
    width: 400,
    height: 400,
    border: 60,
    saveFunc: null,
    photoName: contentBlock.id,
  });
  const { content, errors, type, id, touched } = contentBlock;
  const [photoBlob, setPhotoBlob] = useState<null | string>(null);
  const { photoDescription, description, title, photoPosition } = content;
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
      <ContentBlockControlsWrapper>
        <div>
          <ContentBlockRadio
            id={`contentBlock${id}PhotoPositionLeft`}
            onChange={changeHandler}
            name="photoPosition"
            value="left"
            checked={photoPosition === 'left'}
          />
          <ContentBlockRadioLabel htmlFor={`contentBlock${id}PhotoPositionLeft`}>{t('photoLeft')}</ContentBlockRadioLabel>
        </div>
        <div>
          <ContentBlockRadio
            id={`contentBlock${id}PhotoPositionRight`}
            onChange={changeHandler}
            name="photoPosition"
            value="right"
            checked={photoPosition === 'right'}
          />
          <ContentBlockRadioLabel htmlFor={`contentBlock${id}PhotoPositionRight`}>{t('photoRight')}</ContentBlockRadioLabel>
        </div>
      </ContentBlockControlsWrapper>
      <ContentPhotoTextBlockWrapper>
        <ContentPhotoTextBlockImgWrapper photoPosition={photoPosition || 'right'}>
          <FileUploader
            id={`contentBlock${id}Photo`}
            onChange={openEditPhoto}
            name="photo"
            value={photoBlob}
            margin="0 0 1px"
            height='400px'
            width='400px'
          />
          <Input
            id={`contentBlock${id}photoDescription`}
            name="photoDescription"
            value={photoDescription}
            margin="15px 0 0"
            onChange={changeHandler}
            placeholder={`${t('smallPhotoDescription')} (${t('optionalІSmall')})`}
            fz={16}
            padding="10px"
            max={50}
            isValid={touched.photoDescription && !errors.photoDescription}
          />
          <ErrorMsg
            show={touched.photoDescription && !!errors.photoDescription}
            margin="5px 0 0"
          >
            {errors.photoDescription}
          </ErrorMsg>
        </ContentPhotoTextBlockImgWrapper>
        <ContentPhotoTextBlockInputsWrapper photoPosition={photoPosition || 'right'}>
          <Input
            id={`contentBlock${id}title`}
            name="title"
            value={title}
            margin="0"
            onChange={changeHandler}
            placeholder={`${t('title')} (${t('optionalІSmall')})`}
            fz={16}
            max={100}
            padding="10px"
            isValid={touched.title && !errors.title}
          />
          <ErrorMsg show={touched.title && !!errors.title} margin="5px 0 0">{errors.title}</ErrorMsg>
          <TextArea
            value={description}
            onChange={changeHandler}
            name="description"
            id={`contentBlock${id}Description`}
            height="100%"
            margin="5px 0 0"
            padding="10px"
            fz={16}
            max={5000}
            placeholder={t('text')}
            isValid={touched.description && !errors.description}
          />
          <ErrorMsg show={touched.description && !!errors.description} margin="5px 0 0">{errors.description}</ErrorMsg>
          {/*<ErrorMsg show={touched.description && !!errors.description} margin='5px 0 0'>{errors.description}</ErrorMsg>*/}
        </ContentPhotoTextBlockInputsWrapper>
      </ContentPhotoTextBlockWrapper>
    </ContentBlockItem>
  );
};

export default memo(CreatePhotoTextContentBlock);
