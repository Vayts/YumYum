import React from 'react';
import {
	CreateRecipeBlock, CreateRecipeImg, CreateRecipeImgWrapper,
	CreateRecipeMainInfo,
	CreateRecipeMainInputs,
	CreateRecipeTitle,
	CreateRecipeWrapper,
} from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Button } from '@src/components/UI/Button/Button';
import { Input } from '@src/components/UI/Input/Input';
import { TextArea } from '@src/components/UI/TextArea/TextArea';

export const CreateRecipePage: React.FC = () => {
	const { t } = useTranslation();
	
	return (
		<CreateRecipeWrapper>
			<CreateRecipeTitle>
				<Title fz={25} fw={600}>{t('createRecipe')}</Title>
				<Button margin='0' padding='10px 10px' clickHandler={() => null} text={t('publish')}/>
			</CreateRecipeTitle>
			<CreateRecipeBlock>
				<Title fz={18} fw={500}>Основна інформація</Title>
				<CreateRecipeMainInfo>
					<CreateRecipeImgWrapper>
						<CreateRecipeImg/>
					</CreateRecipeImgWrapper>
					<CreateRecipeMainInputs>
						<Input
							id='asd'
							name='asd'
							value=''
							margin='0'
							onChange={() => null}
							placeholder={`${t('recipeName')}*`}
							padding='10px'
						/>
						<TextArea
							value=''
							onChange={() => null}
							name='asd'
							id='asddf'
							height='100%'
							margin='15px 0 0'
							padding='10px'
							fz={16}
							placeholder='Опис рецепту'
						/>
					</CreateRecipeMainInputs>
				</CreateRecipeMainInfo>
			</CreateRecipeBlock>
		</CreateRecipeWrapper>
	);
};
