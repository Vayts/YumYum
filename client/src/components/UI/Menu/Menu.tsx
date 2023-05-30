import React, { useRef, useState } from 'react';
import { IMenu } from '@src/components/UI/Menu/types';
import { MenuContent, MenuIcon, MenuWrapper } from '@src/components/UI/Menu/style';
import { useOutsideClick } from '@src/hooks/useOutsideClick';

export const Menu: React.FC<IMenu> = ({ vertical, children }) => {
	const menuRef = useRef(null);
	const [isOpen, setOpen] = useState(false);
	
	useOutsideClick(menuRef, () => setOpen(false));
	
	return (
		<MenuWrapper ref={menuRef}>
			<MenuIcon className='icon-menu' onClick={() => setOpen(!isOpen)} vertical={vertical} isOpen={isOpen}/>
			{isOpen && (
				<MenuContent>
					{children}
				</MenuContent>
			)}
		</MenuWrapper>
	);
};