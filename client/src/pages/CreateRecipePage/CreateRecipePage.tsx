import React, { memo, useState } from 'react';
import Title from '@src/components/UI/Title/Title';
import Button from '@src/components/UI/Button/Button';
import { CreateRecipeTitle } from '@src/pages/CreateRecipePage/style';
import { useTranslation } from 'react-i18next';
import { ICreateRecipeContentBlock, ICreateRecipeIngredient, ICreateRecipeMain } from '@src/types/createRecipe.types';
import MainInfoBlock from '@src/pages/CreateRecipePage/MainInfoBlock/MainInfoBlock';
import IngredientsBlock from '@src/pages/CreateRecipePage/IngredientsBlock/IngredientsBlock';
import ContentBlocks from '@src/pages/CreateRecipePage/ContentBlocks/ContentBlocks';
import { createRecipeFullFormValidate } from '@src/validation/createRecipe.validation';
import { getCreateRecipeDto } from '@helpers/createRecipe.helper';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@src/hooks/hooks';
import { addRecipeRequest } from '@src/store/createRecipe/actions';

const mainInfoInitial: ICreateRecipeMain = {
  title: '',
  description: '',
  errors: {},
  touched: {},
  photo: null,
};

const CreateRecipePage: React.FC = () => {
  const [mainInfo, setMainInfo] = useState<ICreateRecipeMain>(mainInfoInitial);
  const [ingredients, setIngredients] = useState<ICreateRecipeIngredient[]>([]);
  const [contentBlocks, setContentBlocks] = useState<ICreateRecipeContentBlock[]>([]);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  
  const submitHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (createRecipeFullFormValidate(mainInfo, ingredients, contentBlocks)) {
      const values = getCreateRecipeDto(mainInfo, ingredients, contentBlocks);
      
      const formData = new FormData();
      values.photos.forEach((item) => {
        formData.append('photos', item);
      });
      formData.append('mainInfo', JSON.stringify(values.mainInfo));
      formData.append('contentBlocks', JSON.stringify(values.contentBlocks));
      formData.append('ingredients', JSON.stringify(values.ingredients));
      
      dispatch(addRecipeRequest(formData));
    }
  };
  
  return (
    <div>
      {/*<form>*/}
      <CreateRecipeTitle>
        <Title fz={25} fw={600}>{t('createRecipe')}</Title>
        <Button margin='0' padding='10px 10px' clickHandler={submitHandler} text={t('publish')} type='submit'/>
      </CreateRecipeTitle>
      <MainInfoBlock mainInfo={mainInfo} setMainInfo={setMainInfo}/>
      <IngredientsBlock ingredients={ingredients} setIngredients={setIngredients}/>
      <ContentBlocks contentBlocks={contentBlocks} setContentBlocks={setContentBlocks}/>
      {/*</form>*/}
    </div>
  );
};

export default memo(CreateRecipePage);
