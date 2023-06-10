import { getPhotoFullName } from '@src/validation/app.helper';
import { ICreateRecipeContentBlock, ICreateRecipeIngredient, ICreateRecipeMain } from '@src/types/createRecipe.types';

// eslint-disable-next-line max-len
export function getCreateRecipeDto(  
  mainInfo: ICreateRecipeMain,
  ingredients: ICreateRecipeIngredient[],
  contentBlocks: ICreateRecipeContentBlock[],
): any {
  const result: any = {
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
      id: item.id,
      value: item.value,
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
        },
      });
    }
  });

  return result;
}
