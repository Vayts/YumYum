import React from 'react';
import { ModalClose, ModalDialog, ModalWrapper } from '@src/components/Modal/style';
import { useAppDispatch, useAppSelector } from '@src/hooks/hooks';
import { selectModalContent, selectModalType } from '@src/store/modal/selectors';
import { resetModal } from '@src/store/modal/reducer';

export const Modal: React.FC = () => {
	const type = useAppSelector(selectModalType);
	const content = useAppSelector(selectModalContent);
	const dispatch = useAppDispatch();
	const generateModalContent = () => {
		switch (type) {
		default:
			return null;
		}
	};
	
	const closeModal = () => {
		dispatch(resetModal());
	};
	
	return (
		<ModalWrapper>
			<ModalDialog>
				<ModalClose className='icon-cancel' onClick={() => closeModal()}/>
				{generateModalContent()}
			</ModalDialog>
		</ModalWrapper>
	);
};
