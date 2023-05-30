import React from 'react';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';
import { Description } from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import { IContentTextBlockProps } from '@src/pages/CreateRecipePage/ContentBlocks/ContentTextBlock/types';

export const ContentTextBlock: React.FC<IContentTextBlockProps> = ({ content, id, onChangeHandler }) => {
	const { t } = useTranslation();
	
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		onChangeHandler(e.target.name, e.target.value, id);
	};
	
	return (
		<>
			<Description>{t('contentTextBlockWarning')}</Description>
			<Input
				margin='15px 0'
				label='Заголовок'
				id={`contentBlock${id}Title`}
				name='title'
				value={content.title}
				onChange={(e) => changeHandler(e)}
				max={100}
			/>
			<TextArea
				margin='15px 0'
				label='Текст'
				id={`contentBlock${id}Description`}
				name='description'
				value={content.description}
				height='250px'
				onChange={(e) => changeHandler(e)}
				max={1500}
			/>
		</>
	);
};
