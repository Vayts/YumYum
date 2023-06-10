import { ICreateRecipeIngredient } from '@src/types/createRecipe.types';

export interface IIngredientItemProps {
  ingredient: ICreateRecipeIngredient,
  index: number,
  onChange: (value: string, id: string) => void,
  isUpPossible: boolean,
  onUp: (index: number) => void,
  isDownPossible: boolean,
  onDown: (index: number) => void,
  isDeletePossible: boolean,
  onDelete: (id: string) => void,
}

export interface IIngredientItemIconStyle {
  isDisabled: boolean,
}
