export interface ICreateRecipeMain {
  title: string,
  description: string,
  errors: Record<string, string>,
  touched: Record<string, boolean>,
  photo: File | null,
}

export interface ICreateRecipeIngredient {
  id: string,
  value: string,
  touched: boolean,
  errors: Record<string, string>,
}

export interface ICreateRecipeContentBlock {
  id: string,
  type: string,
  errors: Record<string, string>,
  touched: Record<string, boolean>,
  content: {
    photo?: File,
    photoPosition?: 'right' | 'left',
    photoDescription: string,
    title: string,
    description: string,
  }
}

export interface ICreateRecipeDto {
  photos: File[],
  mainInfo: ICreateRecipeMainDto,
  ingredients: ICreateRecipeIngredientDto[],
  contentBlocks: IContentBlockDto[],
}

export interface IContentBlockDto {
  id: string,
  type: string,
  content: {
    photo?: string | null,
    photoPosition?: 'right' | 'left',
    photoDescription: string,
    title: string,
    description: string,
  }
}

export interface ICreateRecipeMainDto {
  title: string,
  description: string,
  photo: string,
}

export interface ICreateRecipeIngredientDto {
  value: string,
  id: string,
}
