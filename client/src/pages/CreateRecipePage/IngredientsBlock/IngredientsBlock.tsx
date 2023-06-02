import React, { useEffect } from 'react';
import { CreateRecipeBlock } from '@src/pages/CreateRecipePage/style';
import { Title } from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { Input } from '@src/components/UI/Input/Input';
import { Button } from '@src/components/UI/Button/Button';
import { Description } from '@src/components/UI/Description/Description';
import {
  IngredientsIcon,
  IngredientsIconsWrapper,
  IngredientsInputElemWrapper,
  IngredientsInputWrapper, IngredientsOrderIcon,
} from '@src/pages/CreateRecipePage/IngredientsBlock/style';
import { v4 as uuidv4 } from 'uuid';
import { IIngredientsBlock } from '@src/pages/CreateRecipePage/IngredientsBlock/types';
import { useTheme } from 'styled-components';
import { THEMES } from '@constants/themes';
import { createRecipeIngredientValidation } from '@src/validation/createRecipe.validation';
import { ErrorMsg } from '@src/components/UI/ErrorMsg/ErrorMsg';

export const IngredientsBlock: React.FC<IIngredientsBlock> = ({ setIngredients, ingredients }) => {
  const { dangerColor } = useTheme() as typeof THEMES.light;
  const { t } = useTranslation();
	
  const addNewIngredient = () => {
    setIngredients((state) => state.concat({
      id: uuidv4(),
      value: '',
      touched: false,
      errors: {},
    }));
  };
	
  useEffect(() => {
    addNewIngredient();
  }, []);
	
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients((state) => state.map((item) => {
      if (item.id === e.target.id) {
        return {
          ...item,
          value: e.target.value,
          errors: createRecipeIngredientValidation(e.target.value),
          touched: true,
        };
      }
      return item;
    }));
  };
	
  const changePositionUp = (index: number) => {
    if (ingredients[index - 1]) {
      const temp = ingredients[index - 1];
      const newState = ingredients.slice(0, ingredients.length);
      newState[index - 1] = newState[index];
      newState[index] = temp;
      setIngredients(() => newState);
    }
  };
	
  const changePositionDown = (index: number) => {
    if (ingredients[index + 1]) {
      const temp = ingredients[index + 1];
      const newState = ingredients.slice(0, ingredients.length);
      newState[index + 1] = newState[index];
      newState[index] = temp;
      setIngredients(() => newState);
    }
  };
	
  const deleteHandler = (id: string) => {
    if (ingredients.length > 1) {
      setIngredients((state) => state.filter((item) => item.id !== id));
    }
  };
	
  return (
    <CreateRecipeBlock>
      <Title fz={18} fw={500} margin='0 0 20px'>{t('ingredients')}</Title>
      <Description>{t('ingredientsText')}</Description>
      {ingredients.map((item, index) => {
        const isValid = item.touched ? item.touched && !item.errors.ingredients : true;
        
        return (
          <div key={item.id}>
            <Title color={!isValid ? dangerColor : 'inherit'} fz={15}>{`${t('ingredient')} #${index + 1}`}</Title>
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
                  isValid={isValid}
                />
              </IngredientsInputElemWrapper>
              <IngredientsIcon
                isDisabled={ingredients.length === 1}
                className='icon-cancel'
                onClick={() => deleteHandler(item.id)}
              />
            </IngredientsInputWrapper>
            <ErrorMsg show={item.touched && !!item.errors.ingredients} margin='5px 0 0'>{item.errors.ingredients}</ErrorMsg>
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
