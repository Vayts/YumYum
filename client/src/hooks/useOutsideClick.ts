import { RefObject, useEffect } from 'react';
import { useAppSelector } from '@src/hooks/hooks';

export function useOutsideClick(ref: RefObject<HTMLElement>, func: () => void, spectate = null): void {
	useEffect(() => {
		function handleClick(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				func();
			}
		}
		
		document.addEventListener('mousedown', handleClick);
		
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, [ref, spectate]);
}
