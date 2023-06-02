import React, { useState } from 'react';
import { Button } from '@src/components/UI/Button/Button';
import { ContentBlockModal } from '@src/pages/CreateRecipePage/ContentBlocks/ContentBlockModal/ContentBlockModal';
import { IContentBlocks } from '@src/pages/CreateRecipePage/ContentBlocks/types';
import { ContentBlockItem, ContentBlocksList, ContentMenuWrapper } from '@src/pages/CreateRecipePage/ContentBlocks/style';
import { IContentBlock } from '@src/types/contentBlocks.types';
import { CONTENT_BLOCK_TYPES } from '@constants/contentBlocks';
import { ContentTextBlock } from '@src/pages/CreateRecipePage/ContentBlocks/ContentTextBlock/ContentTextBlock';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { ContentPhotoTextBlock } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoTextBlock/ContentPhotoTextBlock';
import { ContentPhotoBlock } from '@src/pages/CreateRecipePage/ContentBlocks/ContentPhotoBlock/ContentPhotoBlock';
import { Menu } from '@src/components/UI/Menu/Menu';
import { ContentBlockMenu } from '@src/components/UI/Menu/ContentBlockMenu/ContentBlockMenu';
import { contentBlockValidation } from '@src/validation/createRecipe.validation';

export const ContentBlocks: React.FC<IContentBlocks> = ({ setContentBlocks, contentBlocks }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const { t } = useTranslation();
	
	const changeHandler = (name: string, value: string, id: string) => {
		setContentBlocks(contentBlocks.map((item) => {
			if (item.id === id) {
				return {
					...item,
					content: {
						...item.content,
						[name]: value,
					},
					touched: {
						...item.touched,
						[name]: true,
					},
					errors: {
						...contentBlockValidation({
							...item,
							content: {
								...item.content,
								[name]: value,
							},
						}),
					},
				};
			}
			return item;
		}));
	};
	
	const generateContent = (contentBlock: IContentBlock) => {
		switch (contentBlock.type) {
		case CONTENT_BLOCK_TYPES.TEXT:
			return (
				<ContentTextBlock
					contentBlock={contentBlock}
					onChangeHandler={changeHandler}
				/>
			);
		case CONTENT_BLOCK_TYPES.PHOTO_TEXT:
			return (
				<ContentPhotoTextBlock
					contentBlock={contentBlock}
					onChangeHandler={changeHandler}
				/>
			);
		case CONTENT_BLOCK_TYPES.PHOTO:
			return (
				<ContentPhotoBlock
					contentBlock={contentBlock}
					onChangeHandler={changeHandler}
				/>
			);
		default:
			return null;
		}
	};
	
	return (
		<>
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
						<ContentBlockItem key={item.id}>
							<ContentMenuWrapper>
								<Menu vertical>
									<ContentBlockMenu setContentBlocks={setContentBlocks} id={item.id} type={item.type}/>
								</Menu>
							</ContentMenuWrapper>
							<Title fz={18} fw={500} margin='0 0 20px'>
								{`${t('contentBlockNumber', { value: index + 1 })} - ${t(item.type)}`}
							</Title>
							{generateContent(item)}
						</ContentBlockItem>
					);
				})}
			</ContentBlocksList>
			<Button
				clickHandler={() => setModalOpen(true)}
				width='100%'
				text={t('addContentBlock')}
				margin='20px 0'
				padding='15px 0'
			/>
		</>
	);
};
