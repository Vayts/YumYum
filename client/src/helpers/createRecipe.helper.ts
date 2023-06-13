import { getPhotoFullName } from '@src/validation/app.helper';
import {
  ICreateRecipeContentBlock,
  ICreateRecipeDto,
  ICreateRecipeIngredient,
  ICreateRecipeMain,
} from '@src/types/createRecipe.types';

// eslint-disable-next-line max-len
export function getCreateRecipeDto(  
  mainInfo: ICreateRecipeMain,
  ingredients: ICreateRecipeIngredient[],
  contentBlocks: ICreateRecipeContentBlock[],
): ICreateRecipeDto {
  console.log(mainInfo);
  
  const result: ICreateRecipeDto = {
    photos: [mainInfo.photo as File],
    mainInfo: {
      title: mainInfo.title,
      description: mainInfo.description,
      photo: getPhotoFullName(mainInfo.photo as File),
    },
    ingredients: [],
    contentBlocks: [],
  };
  
  ingredients.forEach((item) => {
    result.ingredients.push({
      id: item.id as string,
      value: item.value as string,
    });
  });
  
  contentBlocks.forEach((item) => {
    if (item.content?.photo) {
      result.photos.push(item.content.photo as File);
      result.contentBlocks.push({
        id: item.id,
        type: item.type,
        content: {
          ...item.content,
          photo: getPhotoFullName(item.content.photo as File),
        },
      });
    } else {
      result.contentBlocks.push({
        id: item.id,
        type: item.type,
        content: {
          ...item.content,
          photo: null,
        },
      });
    }
  });
  
  console.log(result);
  return result;
}
