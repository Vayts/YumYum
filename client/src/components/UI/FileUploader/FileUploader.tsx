import React from 'react';
import { IFileUploader } from '@src/components/UI/FileUploader/types';
import {
  FileUploaderFiller,
  FileUploaderIcon,
  FileUploaderImg, FileUploaderImgWrapper, FileUploaderInput,
  FileUploaderText,
  FileUploaderTextWrapper,
  FileUploaderWrapper,
} from '@src/components/UI/FileUploader/style';
import { useTranslation } from 'react-i18next';
import { getNotification } from '@src/notification/notifications';

export const FileUploader: React.FC<IFileUploader> = (props) => {
  const { height, margin, name, onChange, text, isValid, value, width, id } = props;
  const { t } = useTranslation();
	
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target?.files[0].size > 26214400) {
      getNotification('Слишком большой файл', 'error');
      return false;
    }
		
    onChange(e);
    e.target.value = '';
  };
	
  return (
    <FileUploaderWrapper
      value={value}
      htmlFor={id}
      height={height}
      margin={margin}
      width={width}
      isValid={isValid !== undefined ? isValid : true}
    >
      {value && (
        <FileUploaderImgWrapper>
          <FileUploaderFiller>
            <FileUploaderIcon className='icon-upload'/>
            <FileUploaderText>{text || t('changePicture')}</FileUploaderText>
          </FileUploaderFiller>
          <FileUploaderImg src={value}/>
        </FileUploaderImgWrapper>
      )}
      {!value && (
        <FileUploaderTextWrapper>
          <FileUploaderIcon className='icon-upload'/>
          <FileUploaderText>{text || t('uploadPicture')}</FileUploaderText>
        </FileUploaderTextWrapper>
      )}
      <FileUploaderInput name={name} id={id} type='file' accept='.jpeg,.jpg,.png' onChange={(e) => changeHandler(e)}/>
    </FileUploaderWrapper>
  );
};
