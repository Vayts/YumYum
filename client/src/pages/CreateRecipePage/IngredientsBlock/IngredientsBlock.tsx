import React from 'react';
import { CreateRecipeBlock } from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectIngredients } from '@src/store/createRecipe/selector';
import { Input } from '@src/components/UI/Input/Input';
import { Button } from '@src/components/UI/Button/Button';
import { addIngredient, setIngredients } from '@src/store/createRecipe/reducer';
import { Description } from '@src/components/UI/Description/Description';
import {
	IngredientsIcon,
	IngredientsIconsWrapper,
	IngredientsInputElemWrapper,
	IngredientsInputWrapper, IngredientsOrderIcon,
} from '@src/pages/CreateRecipePage/IngredientsBlock/style';

export const IngredientsBlock: React.FC = () => {
	const ingredients = useAppSelector(selectIngredients);
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	
	const addNewIngredient = () => {
		dispatch(addIngredient());
	};
	
	const changeHandler = (e) => {
		const newState = ingredients.map((item) => {
			if (item.id === e.target.id) {
				return {
					...item,
					value: e.target.value,
				};
			}
			return item;
		});
		dispatch(setIngredients(newState));
	};
	
	const changePositionUp = (index) => {
		if (ingredients[index - 1]) {
			const temp = ingredients[index - 1];
			const newState = ingredients.slice(0, ingredients.length);
			newState[index - 1] = newState[index];
			newState[index] = temp;
			dispatch(setIngredients(newState));
		}
	};
	
	const changePositionDown = (index) => {
		if (ingredients[index + 1]) {
			const temp = ingredients[index + 1];
			const newState = ingredients.slice(0, ingredients.length);
			newState[index + 1] = newState[index];
			newState[index] = temp;
			dispatch(setIngredients(newState));
		}
	};
	
	const deleteHandler = (id) => {
		if (ingredients.length > 1) {
			const newState = ingredients.filter((item) => item.id !== id);
			dispatch(setIngredients(newState));
			return true;
		}
	};
	
	return (
		<CreateRecipeBlock>
			<Title fz={18} fw={500} margin='0 0 20px'>{t('ingredients')}</Title>
			<Description>{t('ingredientsText')}</Description>
			{ingredients.map((item, index) => {
				return (
					<div key={item.id}>
						<Title fz={15}>{`${t('ingredient')} #${index + 1}`}</Title>
						<IngredientsInputWrapper>
							<IngredientsIconsWrapper>
								<IngredientsOrderIcon className='icon-up' isDisabled={index === 0} onClick={() => changePositionUp(index)}/>
								<IngredientsOrderIcon className='icon-down' isDisabled={index === ingredients.length - 1} onClick={() => changePositionDown(index)}/>
							</IngredientsIconsWrapper>
							<IngredientsInputElemWrapper>
								<Input
									id={item.id}
									name='ingredient'
									value={item.value}
									onChange={(e) => changeHandler(e)}
									height='35px'
									margin='0'
									placeholder={`${t('ingredient')}`}
								/>
							</IngredientsInputElemWrapper>
							<IngredientsIcon
								isDisabled={ingredients.length === 1}
								className='icon-cancel'
								onClick={() => deleteHandler(item.id)}
							/>
						</IngredientsInputWrapper>
						
					</div>
					
				);
			})}
			{ingredients.length < 20 && (
				<Button
					clickHandler={() => addNewIngredient()}
					margin='20px 0 0'
					text={t('addIngredient')}
				/>
			)}
		</CreateRecipeBlock>
	);
};
