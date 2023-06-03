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
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';
import { IPhotoTextContentBlock } from '@src/types/contentBlocks.types';

export const ContentPhotoTextBlock: React.FC<IContentPhotoTextBlockProps> = ({ contentBlock, onChangeHandler }) => {
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
  const {
    content,
    id,
    errors,
    touched,
  } = contentBlock;
  const {
    photoDescription,
    photo,
    photoPosition,
    description,
    title,
  } = content as IPhotoTextContentBlock;
  const { t } = useTranslation();
    
  const setPhotoHandler = (photo: any) => {
    onChangeHandler('photo', photo, id);
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
          saveFunc: setPhotoHandler };
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
            value="left"
            checked={photoPosition === 'left'}
          />
          <ContentBlockRadioLabel htmlFor={`contentBlock${id}PhotoPositionLeft`}>{t('photoLeft')}</ContentBlockRadioLabel>
        </ContentBlockRadioWrapper>
        <ContentBlockRadioWrapper>
          <ContentBlockRadio
            id={`contentBlock${id}PhotoPositionRight`}
            onChange={(e) => onChangeHandler('photoPosition', e.target.value, id)}
            name={`contentBlock${id}PhotoPosition`}
            value="right"
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
              name="photo"
              value={photo ? URL.createObjectURL(photo) : null}
              margin="0 0 1px"
            />
          </ContentPhotoTextBlockImgHolder>
          <Input
            id={`contentBlock${id}photoDescription`}
            name="photoDescription"
            value={photoDescription}
            margin="15px 0 0"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
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
        <ContentPhotoTextBlockInputsWrapper photoPosition={photoPosition}>
          <Input
            id={`contentBlock${id}title`}
            name="title"
            value={title}
            margin="0"
            onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
            placeholder={`${t('title')} (${t('optionalІSmall')})`}
            fz={16}
            max={100}
            padding="10px"
            isValid={touched.title && !errors.title}
          />
          <ErrorMsg show={touched.title && !!errors.title} margin="5px 0 0">{errors.title}</ErrorMsg>
          <TextArea
            value={description}
            onChange={(e) => onChangeHandler(e.target.name, e.target.value, id)}
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
    </>
  );
};
