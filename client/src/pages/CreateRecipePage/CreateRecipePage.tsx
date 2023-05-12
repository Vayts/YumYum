import React from 'react';
import { CreateRecipeTitle, CreateRecipeWrapper } from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Button } from '@src/components/UI/Button/Button';

export const CreateRecipePage: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<CreateRecipeWrapper>
			<CreateRecipeTitle>
				<Title fz={25} fw={600}>{t('createRecipe')}</Title>
				<Button margin='0' padding='10px 10px' clickHandler={() => null} text={t('publish')}/>
			</CreateRecipeTitle>
		</CreateRecipeWrapper>
	);
};
