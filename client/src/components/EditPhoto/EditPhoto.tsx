import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AvatarEditor from 'react-avatar-editor';
import { Button } from '@src/components/UI/Button/Button';
import { IEditPhoto } from '@src/components/EditPhoto/types';
import { EditPhotoBackground, EditPhotoButtons, EditPhotoWrapper } from '@src/components/EditPhoto/style';
import { Description } from '@src/components/UI/Description/Description';
import { getNotification } from '@src/notification/notifications';
import { getScrollbarWidth } from '@helpers/visual.helper';

export const EditPhoto: React.FC<IEditPhoto> = ({ state, setState }) => {
	const { photo, height, width, saveFunc, border } = state;
	const [isLoading, setLoading] = useState(false);
	const [scale, setScale] = useState(1.1);
	const editor = useRef(null);
	const { t } = useTranslation();
	
	useEffect(() => {
		const scrollbarWidth = getScrollbarWidth();
		document.body.style.overflowY = 'hidden';
		document.body.style.paddingRight = `${scrollbarWidth}px`;
		
		return () => {
			document.body.style.overflowY = 'scroll';
			document.body.style.paddingRight = '0';
		};
	}, []);
	
	const onMouseWheel = (e) => {
		const delta = e.deltaY || e.detail;
		const scaleModifier = delta > 0 ? -0.1 : +0.1;
		const newScaleData = scale + scaleModifier;
		
		if (newScaleData >= 1 && newScaleData < 4) {
			setScale(newScaleData);
		}
	};
	
	const cancelHandler = () => {
		if (isLoading) {
			return false;
		}
		
		setState((state) => {
			return {
				...state,
				isOpen: false,
				photo: null,
			};
		});
	};
	
	const saveHandler = () => {
		if (isLoading) {
			return false;
		}
		
		setLoading(true);
		if (editor) {
			const canvas = editor.current.getImage().toDataURL();
			fetch(canvas).then((res) => res.blob())
				.then((blob) => {
					const type = photo.split('.').pop();
					const name = 'test recipe';
					const result = new File([blob], name, { type: `image/${type}`, lastModified: new Date().getTime() });
					saveFunc(result);
					setLoading(false);
				})
				.then(() => {
					cancelHandler();
				})
				.catch(() => {
					getNotification('Something went wrong', 'error');
				});
		}
	};
	
	return (
		<EditPhotoBackground>
			<EditPhotoWrapper width={width} border={border}>
				<AvatarEditor
					ref={editor}
					image={photo}
					width={width || 600}
					height={height || 337}
					border={border || 30}
					color={[232, 232, 232, 0.6]}
					scale={scale}
					rotate={0}
					onWheel={(e) => onMouseWheel(e)}
				/>
				<Description
					margin='10px 20px 0'
					align='center'
				>
					{t('editPhotoText')}
				</Description>
				<EditPhotoButtons>
					<Button clickHandler={() => saveHandler()} text={t('savePicture')} width='35%'/>
					<Button clickHandler={() => cancelHandler()} text={t('cancel')} styleType='transparent' width='35%'/>
				</EditPhotoButtons>
			</EditPhotoWrapper>
		</EditPhotoBackground>
	);
};
