import React from 'react';
import {
	CreateRecipeTitle,
	CreateRecipeWrapper,
} from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { Button } from '@src/components/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { CreateRecipeMain } from '@src/pages/CreateRecipePage/CreateRecipeMain/CreateRecipeMain';
import { IngredientsBlock } from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientsBlock';

export const CreateRecipePage: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<CreateRecipeWrapper>
			<form id='createRecipeForm' action='#'>
				<CreateRecipeTitle>
					<Title fz={25} fw={600}>{t('createRecipe')}</Title>
					<Button margin='0' padding='10px 10px' clickHandler={null} text={t('publish')}/>
				</CreateRecipeTitle>
				<CreateRecipeMain/>
				<IngredientsBlock/>
			</form>
		</CreateRecipeWrapper>
	);
};
