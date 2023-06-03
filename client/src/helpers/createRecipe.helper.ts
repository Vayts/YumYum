import { ICreateRecipeMainInfo, ICreateRecipeMainInfoCompleted } from '@src/pages/CreateRecipePage/CreateRecipeMain/types';
import { IIngredientItem } from '@src/store/createRecipe/types';
import { IContentBlock } from '@src/types/contentBlocks.types';

export function getCreateRecipeDto(
  mainInfo: ICreateRecipeMainInfoCompleted,
  ingredients: IIngredientItem[],
  contentBlocks: IContentBlock[],
) {
  const result = {
    photos: [],
    mainInfo: {
      title: mainInfo.title,
      description: mainInfo.description,
      photo: mainInfo.photo,
    },
    ingredients,
    contentBlocks: [],
  };
}
