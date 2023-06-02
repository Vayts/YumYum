import React, { useState } from 'react';
import {
	CreateRecipeTitle,
	CreateRecipeWrapper,
} from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { Button } from '@src/components/UI/Button/Button';
import { useTranslation } from 'react-i18next';
import { CreateRecipeMain } from '@src/pages/CreateRecipePage/CreateRecipeMain/CreateRecipeMain';
import { IngredientsBlock } from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientsBlock';
import { IIngredientItem } from '@src/store/createRecipe/types';
import { ContentBlocks } from '@src/pages/CreateRecipePage/ContentBlocks/ContentBlocks';
import { IContentBlock } from '@src/types/contentBlocks.types';
import { ICreateRecipeMainInfo } from '@src/pages/CreateRecipePage/CreateRecipeMain/types';

export const CreateRecipePage: React.FC = () => {
	const [mainInfo, setMainInfo] = useState<ICreateRecipeMainInfo>({
		photo: null,
		title: '',
		description: '',
		errors: {},
		touched: {},
	});
	const [ingredients, setIngredients] = useState<IIngredientItem[]>([]);
	const [contentBlocks, setContentBlocks] = useState<IContentBlock[]>([]);
	const { t } = useTranslation();
	
	const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
	};
	
	return (
		<CreateRecipeWrapper>
			<CreateRecipeTitle>
				<Title fz={25} fw={600}>{t('createRecipe')}</Title>
				<Button margin='0' padding='10px 10px' clickHandler={(e) => submitHandler(e)} text={t('publish')} type='submit'/>
			</CreateRecipeTitle>
			<CreateRecipeMain mainInfo={mainInfo} setMainInfo={setMainInfo}/>
			<IngredientsBlock ingredients={ingredients} setIngredients={setIngredients}/>
			<ContentBlocks contentBlocks={contentBlocks} setContentBlocks={setContentBlocks}/>
		</CreateRecipeWrapper>
	);
};
