import React, { useEffect, useState } from 'react';
import { Button } from '@src/components/UI/Button/Button';
import { CONTENT_BLOCKS } from '@constants/contentBlocks';
import { useTranslation } from 'react-i18next';
import { IContentBlock } from '@src/types/contentBlocks.types';
import { IContentBlockModal } from '@src/pages/CreateRecipePage/ContentBlocks/ContentBlockModal/types';
import { hideScrollbar, showScrollbar } from '@helpers/visual.helper';
import { v4 as uuidv4 } from 'uuid';
import {
  ContentBlockButtons,
  ContentBlockModalDialog, ContentBlockModalItem,
  ContentBlockModalList, ContentBlockModalRadio, ContentBlockModalRadioLabel, ContentBlockModalWrapper,
} from './style';

export const ContentBlockModal: React.FC<IContentBlockModal> = ({ setContentBlocks, setModalOpen, contentBlocks }) => {
  const [contentBlockType, setContentBlockType] = useState<IContentBlock | null>(null);
  const { t } = useTranslation();
	
  useEffect(() => {
    hideScrollbar();
		
    return () => {
      showScrollbar();
    };
  }, []);
	
  const addBlockHandler = () => {
    if (contentBlockType) {
      const newBlock = {
        id: uuidv4(),
        type: contentBlockType.type,
        content: contentBlockType.content,
        errors: {},
        touched: {},
      };
			
      setContentBlocks([...contentBlocks, newBlock]);
      setModalOpen(false);
    }
  };
	
  const changeHandler = (value: any) => {
    setContentBlockType(value);
  };
	
  const closeHandler = () => {
    setModalOpen(false);
  };
	
  return (
    <ContentBlockModalWrapper>
      <ContentBlockModalDialog>
        <ContentBlockButtons>
          <Button
            text={t('confirm')}
            clickHandler={() => addBlockHandler()}
            margin='0'
            width='50%'
            padding='15px 0'
            disabled={contentBlockType === null}
            br='0px'
          />
          <Button
            text={t('cancel')}
            clickHandler={() => closeHandler()}
            margin='0'
            styleType='reverse'
            width='50%'
            padding='15px 0'
            br='0px'
          />
        </ContentBlockButtons>
        <ContentBlockModalList>
          {CONTENT_BLOCKS.map((item) => {
            return (
              <ContentBlockModalItem key={item.type}>
                <ContentBlockModalRadio
                  id={`${item.type}ContentBlock`}
                  value={item.type}
                  onChange={() => changeHandler(item)}
                  checked={contentBlockType ? contentBlockType.type === item.type : false}
                />
                <ContentBlockModalRadioLabel htmlFor={`${item.type}ContentBlock`}>{t(item.type)}</ContentBlockModalRadioLabel>
              </ContentBlockModalItem>
            );
          })}
        </ContentBlockModalList>
      </ContentBlockModalDialog>
    </ContentBlockModalWrapper>
  );
};
