import React, { memo, useCallback, useEffect } from 'react';
import { IIngredientsBlockProps } from '@src/pages/CreateRecipePage/IngredientsBlock/types';
import { CreateRecipeBlock } from '@src/pages/CreateRecipePage/style';
import Description from '@src/components/UI/Description/Description';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import Title from '@src/components/UI/Title/Title';
import Button from '@src/components/UI/Button/Button';
import IngredientItem from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientItem/IngredientItem';
import { createRecipeIngredientValidation } from '@src/validation/createRecipe.validation';
import { IngredientsList } from '@src/pages/CreateRecipePage/IngredientsBlock/style';

const IngredientsBlock: React.FC<IIngredientsBlockProps> = ({ ingredients, setIngredients }) => {
  const { t } = useTranslation();
  
  useEffect(() => {
    setIngredients(() => {
      return [{
        value: '',
        errors: {},
        touched: false,
        id: uuidv4(),
      }];
    });
  }, []);
  
  const changeHandler = useCallback((value, id) => {
    setIngredients((state) => state.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          value,
          errors: createRecipeIngredientValidation(value),
          touched: true,
        };
      }
      return item;
    }));
  }, []);
  
  const deleteHandler = useCallback((id: string) => {
    setIngredients((prev) => prev.filter((item) => item.id !== id));
  }, []);
  
  const upHandler = useCallback((index) => {
    if (index > 0) {
      setIngredients((prev) => {
        const temp = prev[index - 1];
        const newState = prev.slice(0, prev.length);
        newState[index - 1] = newState[index];
        newState[index] = temp;
        return newState;
      });
      return true;
    }
    return false;
  }, []);
  
  const downHandler = useCallback((index) => {
    setIngredients((prev) => {
      if (index < prev.length - 1) {
        const temp = prev[index + 1];
        const newState = prev.slice(0, prev.length);
        newState[index + 1] = newState[index];
        newState[index] = temp;
        return newState;
      }
      return prev;
    });
  }, []);
  
  const addNewIngredient = useCallback(() => {
    setIngredients((prev) => {
      return [...prev, {
        value: '',
        errors: {},
        touched: false,
        id: uuidv4(),
      }];
    });
  }, []);
  
  return (
    <CreateRecipeBlock>
      <Title fz={18} fw={500} margin='0 0 20px'>{t('ingredients')}</Title>
      <Description>{t('ingredientsText')}</Description>
      <IngredientsList>
        {ingredients.map((item, index) => {
          return (
            <IngredientItem
              key={item.id}
              isUpPossible={index === 0}
              isDownPossible={index === ingredients.length - 1}
              isDeletePossible={ingredients.length <= 1}
              ingredient={item}
              onChange={changeHandler}
              index={index}
              onDelete={deleteHandler}
              onDown={downHandler}
              onUp={upHandler}
            />
          );
        })}
      </IngredientsList>
      {ingredients.length < 20 && (
        <Button
          clickHandler={addNewIngredient}
          margin='20px 0 0'
          text={t('addIngredient')}
        />
      )}
    </CreateRecipeBlock>
  );
};

export default memo(IngredientsBlock);
