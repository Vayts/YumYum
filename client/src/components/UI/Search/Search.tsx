import React from 'react';
import { ISearch } from '@src/components/UI/Search/types';
import { SearchIcon, SearchInput, SearchWrapper } from '@src/components/UI/Search/style';
import { useTranslation } from 'react-i18next';

export const Search: React.FC<ISearch> = (props) => {
	const {
		id,
		margin,
		height,
		name,
		onChange,
		placeholder,
		refValue,
		value,
		width,
		fz,
	} = props;
	const { t } = useTranslation();
	
	return (
		<SearchWrapper
			margin={margin}
			height={height}
			width={width}
			fz={fz}
			htmlFor={id}
		>
			<SearchInput value={value} onChange={onChange} placeholder={placeholder || t('search')} ref={refValue} name={name} id={id}/>
			<SearchIcon className='icon-search'/>
		</SearchWrapper>
	);
};
