import React, { memo } from 'react';
import { IIngredientItemProps } from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientItem/types';
import Title from '@src/components/UI/Title/Title';
import { useTranslation } from 'react-i18next';
import { THEMES } from '@constants/themes';
import { useTheme } from 'styled-components';
import {
  IngredientContentWrapper, IngredientDeleteIcon,
  IngredientIcon,
  IngredientIconsWrapper,
} from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientItem/style';
import Input from '@src/components/UI/Input/Input';

const IngredientItem: React.FC<IIngredientItemProps> = (props) => {
  const { ingredient, index, onChange, onDown, onUp, onDelete, isUpPossible, isDownPossible, isDeletePossible } = props;
  const isValid = ingredient.touched ? ingredient.touched && !ingredient.errors.ingredient : true;
  const { dangerColor } = useTheme() as typeof THEMES.light;
  const { t } = useTranslation();
  
  return (
    <li>
      <Title color={!isValid ? dangerColor : 'inherit'} fz={15}>{`${t('ingredient')} #${index + 1}`}</Title>
      <IngredientContentWrapper>
        <IngredientIconsWrapper>
          <IngredientIcon className='icon-up' isDisabled={isUpPossible} onClick={() => onUp(index)}/>
          <IngredientIcon className='icon-down' isDisabled={isDownPossible} onClick={() => onDown(index)}/>
        </IngredientIconsWrapper>
        <Input
          id={ingredient.id}
          name='ingredient'
          value={ingredient.value}
          onChange={(e) => onChange(e.target.value, ingredient.id)}
          height='35px'
          margin='0'
          width='100%'
          placeholder={`${t('ingredient')}`}
          isValid={isValid}
        />
        <IngredientDeleteIcon className='icon-cancel' isDisabled={isDeletePossible} onClick={() => onDelete(ingredient.id)}/>
      </IngredientContentWrapper>
    </li>
  );
};

export default memo(IngredientItem);
