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
