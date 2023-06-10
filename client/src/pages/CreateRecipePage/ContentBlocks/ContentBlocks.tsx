import React, { memo, useCallback, useState } from 'react';
import { ContentBlockMenuWrapper, ContentBlocksList, ContentBlocksWrapper } from '@src/pages/CreateRecipePage/ContentBlocks/style';
import { IContentBlocksProps } from '@src/pages/CreateRecipePage/ContentBlocks/types';
import { CONTENT_BLOCK_TYPES } from '@constants/contentBlocks';
import { ICreateRecipeContentBlock } from '@src/types/createRecipe.types';
import { useTranslation } from 'react-i18next';
import { ContentBlockModal } from '@src/pages/CreateRecipePage/ContentBlocks/ContentBlockModal/ContentBlockModal';
import Button from '@src/components/UI/Button/Button';
import CreateTextContentBlock from '@src/pages/CreateRecipePage/ContentBlocks/CreateTextContentBlock/CreateTextContentBlock';
import { contentBlockValidation } from '@src/validation/createRecipe.validation';
import CreatePhotoTextContentBlock from '@src/pages/CreateRecipePage/ContentBlocks/CreatePhotoTextContentBlock/CreatePhotoTextContentBlock';
import { Menu } from '@src/components/UI/Menu/Menu';
import { ContentBlockMenu } from '@src/components/UI/Menu/ContentBlockMenu/ContentBlockMenu';

const ContentBlocks: React.FC<IContentBlocksProps> = ({ contentBlocks, setContentBlocks }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();
  
  const changeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id) => {
    setContentBlocks((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            content: {
              ...item.content,
              [e.target.name]: e.target.value,
            },
            touched: {
              ...item.touched,
              [e.target.name]: true,
            },
            errors: {
              ...contentBlockValidation({
                ...item,
                content: {
                  ...item.content,
                  [e.target.name]: e.target.value,
                },
              }),
            },
          };
        }
        return item;
      });
    });
  }, []);
  
  const savePhotoHandler = useCallback((value, id) => {
    setContentBlocks((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            content: {
              ...item.content,
              photo: value,
            },
            touched: {
              ...item.touched,
              photo: true,
            },
            errors: {
              ...contentBlockValidation({
                ...item,
                content: {
                  ...item.content,
                  photo: value,
                },
              }),
            },
          };
        }
        return item;
      });
    });
  }, []);
  
  const generateContentBlock = (contentBlock: ICreateRecipeContentBlock, index: number) => {
    switch (contentBlock.type) {
    case CONTENT_BLOCK_TYPES.TEXT:
      return (
        <CreateTextContentBlock
          index={index}
          contentBlock={contentBlock}
          onChange={changeHandler}
        />
      );
    case CONTENT_BLOCK_TYPES.PHOTO_TEXT:
      return (
        <CreatePhotoTextContentBlock
          index={index}
          contentBlock={contentBlock}
          onChange={changeHandler}
          onPhotoSave={savePhotoHandler}
        />
      );
    case CONTENT_BLOCK_TYPES.PHOTO:
      return (
        <></>
      );
    default:
      return null;
    }
  };
  
  const openModal = () => {
    setModalOpen(true);
  };
  
  return (
    <ContentBlocksWrapper>
      {isModalOpen && (
        <ContentBlockModal
          setModalOpen={setModalOpen}
          setContentBlocks={setContentBlocks}
          contentBlocks={contentBlocks}
        />
      )}
      <ContentBlocksList>
        {contentBlocks.map((item, index) => {
          return (
            <li key={item.id}>
              <ContentBlockMenuWrapper>
                <Menu>
                  <ContentBlockMenu id={item.id} type={item.type} setContentBlocks={setContentBlocks}/>
                </Menu>
              </ContentBlockMenuWrapper>
              {generateContentBlock(item, index)}
            </li>
          );
        })}
      </ContentBlocksList>
      {contentBlocks.length < 10 && (
        <Button
          clickHandler={openModal}
          width='100%'
          text={contentBlocks.length < 2 ? `${t('addContentBlock')} (${t('atLeastSmall', { value: 2 })})` : t('addContentBlock')}
          margin='20px 0'
          padding='15px 0'
        />
      )}
    </ContentBlocksWrapper>
  );
};

export default memo(ContentBlocks);
