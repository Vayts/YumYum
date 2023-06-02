import React from 'react';
import { MenuItem, MenuList } from '@src/components/UI/Menu/style';
import { IContentBlockMenu } from '@src/components/UI/Menu/ContentBlockMenu/types';
import { useTranslation } from 'react-i18next';
import { CONTENT_BLOCKS } from '@constants/contentBlocks';
import { IContentBlock } from '@src/types/contentBlocks.types';

export const ContentBlockMenu: React.FC<IContentBlockMenu> = ({ setContentBlocks, id, type }) => {
	const { t } = useTranslation();
	const deleteHandler = (id: string) => {
		setContentBlocks((state) => state.filter((item) => item.id !== id));
	};
	
	const resetHandler = (id: string) => {
		let resetContent: IContentBlock['content'] | null = null;
		CONTENT_BLOCKS.forEach((block) => {
			if (block.type === type) {
				resetContent = block.content;
			}
		});
		
		setContentBlocks((state) => state.map((item) => {
			if (item.id === id && resetContent) {
				return {
					...item,
					touched: {},
					errors: {},
					content: resetContent,
				};
			}
			return item;
		}));
	};
	
	return (
		<MenuList>
			<MenuItem onClick={() => resetHandler(id)}>{t('resetContentBlock')}</MenuItem>
			<MenuItem
				onClick={() => deleteHandler(id)}
				isDanger
			>
				{t('delete')}
			</MenuItem>
		</MenuList>
	);
};
