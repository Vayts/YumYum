import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Description from '@src/components/UI/Description/Description';
import Input from '@src/components/UI/Input/Input';
import ErrorMsg from '@src/components/UI/ErrorMsg/ErrorMsg';
import TextArea from '@src/components/UI/TextArea/TextArea';
import { ContentBlockItem } from '@src/pages/CreateRecipePage/ContentBlocks/style';
import Title from '@src/components/UI/Title/Title';
import { ICreateContentBlockProps } from '@src/pages/CreateRecipePage/ContentBlocks/types';

const CreateTextContentBlock: React.FC<ICreateContentBlockProps> = ({ onChange, contentBlock, index }) => {
  const { content, errors, touched, id, type } = contentBlock;
  const { description, title } = content;
  const { t } = useTranslation();
  
  const changeHandler = useCallback((e) => {
    onChange(e, id);
  }, []);
  
  return (
    <ContentBlockItem>
      <Title fz={18} fw={500} margin='0 0 20px'>
        {`${t('contentBlockNumber', { value: index + 1 })} - ${t(type)}`}
      </Title>
      <Description>{t('contentTextBlockWarning')}</Description>
      <Input
        margin='15px 0 5px'
        placeholder={`${t('title')} (${t('optionalІSmall')})`}
        label={`${t('title')} (${t('optionalІSmall')})`}
        id={`contentBlock${id}Title`}
        name='title'
        value={title}
        onChange={changeHandler}
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
        onChange={changeHandler}
        isValid={touched.description && !errors.description}
        max={5000}
      />
      <ErrorMsg show={touched.description && !!errors.description} margin='5px 0 0'>{errors.description}</ErrorMsg>
    </ContentBlockItem>
  );
};

export default memo(CreateTextContentBlock);
