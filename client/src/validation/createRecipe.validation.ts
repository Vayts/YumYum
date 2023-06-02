import i18n from 'i18next';
import { DEFAULT_REGEX_EXP } from '@constants/regex';
import { ICreateRecipeMainInfo } from '@src/pages/CreateRecipePage/CreateRecipeMain/types';
import { IContentBlock, IPhotoContentBlock, IPhotoTextContentBlock, ITextContentBlock } from '@src/types/contentBlocks.types';
import { CONTENT_BLOCK_TYPES } from '@constants/contentBlocks';

const { t } = i18n;

function createRecipeMainTitleValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (str === '') {
		errors.title = t('requiredField');
		return errors;
	}

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.title = t('incorrectValue');
		return errors;
	}

	if (str.length < 5) {
		errors.title = t('atLeast', { value: 5 });
		return errors;
	}

	if (str.length > 80) {
		errors.title = t('lessThan', { value: 80 });
		return errors;
	}
	return {};
}

function createRecipeMainDescriptionValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (str === '') {
		errors.description = t('requiredField');
		return errors;
	}

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.description = t('incorrectValue');
		return errors;
	}

	if (str.length < 20) {
		errors.description = t('atLeast', { value: 20 });
		return errors;
	}

	if (str.length > 1500) {
		errors.description = t('lessThan', { value: 1500 });
		return errors;
	}
	return errors;
}

export function createRecipeMainInfoValidation(mainInfo: ICreateRecipeMainInfo): Record<string, string> {
	const titleValidation: Record<string, string> = createRecipeMainTitleValidation(mainInfo.title);
	const descriptionValidation: Record<string, string> = createRecipeMainDescriptionValidation(mainInfo.description);
  
	return {
		...titleValidation,
		...descriptionValidation,
	};
}

export function createRecipeIngredientValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (str === '') {
		errors.ingredients = t('requiredField');
		return errors;
	}

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.ingredients = t('incorrectValue');
		return errors;
	}

	if (str.length < 2) {
		errors.ingredients = t('atLeast', { value: 2 });
		return errors;
	}

	if (str.length > 50) {
		errors.ingredients = t('lessThan', { value: 50 });
		return errors;
	}
	return errors;
}

function createRecipeContentBlockTitleValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.title = t('incorrectValue');
		return errors;
	}

	if (str.length > 100) {
		errors.title = t('lessThan', { value: 100 });
		return errors;
	}
	return {};
}

function createRecipeContentBlockDescriptionValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (str === '') {
		errors.description = t('requiredField');
		return errors;
	}

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.description = t('incorrectValue');
		return errors;
	}

	if (str.length < 50) {
		errors.description = t('atLeast', { value: 50 });
		return errors;
	}

	if (str.length > 5000) {
		errors.description = t('lessThan', { value: 1500 });
		return errors;
	}

	return errors;
}

export function createRecipeTextBlockTotalValidation(content: ITextContentBlock): Record<string, string> {
	const titleValidation: Record<string, string> = createRecipeContentBlockTitleValidation(content.title);
	const descriptionValidation: Record<string, string> = createRecipeContentBlockDescriptionValidation(content.description);

	return {
		...titleValidation,
		...descriptionValidation,
	};
}

function createRecipeContentBlockPhotoDescriptionValidation(str: string): Record<string, string> {
	const errors: Record<string, string> = {};

	if (!DEFAULT_REGEX_EXP.test(str)) {
		errors.photoDescription = t('incorrectValue');
		return errors;
	}

	if (str.length > 50) {
		errors.photoDescription = t('lessThan', { value: 50 });
		return errors;
	}
	return {};
}

export function createRecipePhotoTextBlockTotalValidation(content: IPhotoTextContentBlock): Record<string, string> {
	const titleValidation: Record<string, string> = createRecipeContentBlockTitleValidation(content.title);
	const descriptionValidation: Record<string, string> = createRecipeContentBlockDescriptionValidation(content.description);
	const photoDescriptionValidation: Record<string, string> = createRecipeContentBlockPhotoDescriptionValidation(content.photoDescription);

	return {
		...titleValidation,
		...descriptionValidation,
		...photoDescriptionValidation,
	};
}

export function createRecipePhotoBlockTotalValidation(content: IPhotoContentBlock): Record<string, string> {
	const photoDescriptionValidation: Record<string, string> = createRecipeContentBlockPhotoDescriptionValidation(content.photoDescription);

	return {
		...photoDescriptionValidation,
	};
}

export function contentBlockValidation(contentBlock: IContentBlock): Record<string, string> {
	let errors = {};

	if (contentBlock.type === CONTENT_BLOCK_TYPES.TEXT) {
		errors = createRecipeTextBlockTotalValidation(contentBlock.content as ITextContentBlock);
		return errors;
	}

	if (contentBlock.type === CONTENT_BLOCK_TYPES.PHOTO_TEXT) {
		errors = createRecipePhotoTextBlockTotalValidation(contentBlock.content as IPhotoTextContentBlock);
		return errors;
	}

	if (contentBlock.type === CONTENT_BLOCK_TYPES.PHOTO) {
		errors = createRecipePhotoBlockTotalValidation(contentBlock.content as IPhotoContentBlock);
		return errors;
	}

	return errors;
}