import React from 'react';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { Description } from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import { IContentTextBlockProps } from '@src/pages/CreateRecipePage/ContentBlocks/ContentTextBlock/types';
import { ITextContentBlock } from '@src/types/contentBlocks.types';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';

export const ContentTextBlock: React.FC<IContentTextBlockProps> = ({ onChangeHandler, contentBlock }) => {
  const { content, errors, id, touched } = contentBlock;
  const { title, description } = content as ITextContentBlock;
  const { t } = useTranslation();
	
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeHandler(e.target.name, e.target.value, id);
  };
	
  return (
    <>
      <Description>{t('contentTextBlockWarning')}</Description>
      <Input
        margin='15px 0 5px'
        placeholder={`${t('title')} (${t('optionalІSmall')})`}
        label={`${t('title')} (${t('optionalІSmall')})`}
        id={`contentBlock${id}Title`}
        name='title'
        value={title}
        onChange={(e) => changeHandler(e)}
        max={100}
        isValid={touched.title && !errors.title}
      />
      <ErrorMsg show={touched.title && !!errors.title} margin='5px 0 0'>{errors.title}</ErrorMsg>
      <TextArea
        margin='5px 0 10px'
        placeholder={t('text')}
        label={t('text')}
        id={`contentBlock${id}Description`}
        name='description'
        value={description}
        height='250px'
        onChange={(e) => changeHandler(e)}
        isValid={touched.description && !errors.description}
        max={5000}
      />
      <ErrorMsg show={touched.description && !!errors.description} margin='5px 0 0'>{errors.description}</ErrorMsg>
    </>
  );
};
