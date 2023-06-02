import React, { useState } from 'react';
import { IInput } from '@src/components/UI/Input/types';
import { InputElem, InputElemWrapper, InputLabel, InputSecureIcon, InputWrapper } from '@src/components/UI/Input/style';

export const Input: React.FC<IInput> = (props) => {
	const {
		type,
		height,
		padding,
		margin,
		fz,
		label,
		value,
		placeholder,
		isSecure,
		width,
		onChange,
		id,
		name,
		isValid,
		refValue,
		min,
		max,
	} = props;
	const [show, setShow] = useState(false);
	
	return (
		<InputWrapper margin={margin} width={width}>
			{label ? <InputLabel htmlFor={id} isValid={isValid !== undefined ? isValid : true}>{label}</InputLabel> : null}
			<InputElemWrapper>
				<InputElem
					name={name}
					ref={refValue || null}
					onChange={(e) => onChange(e)}
					value={value}
					placeholder={placeholder as string}
					type={isSecure && show ? 'text' : type || 'text'}
					height={height}
					padding={padding}
					isValid={isValid !== undefined ? isValid : true}
					fz={fz}
					id={id}
					aria-label={name}
					minLength={min}
					maxLength={max}
				/>
				{isSecure && (
					<InputSecureIcon
						data-testid='secureIcon'
						className="icon-password"
						onMouseDown={() => setShow(!show)}
						onMouseUp={() => setShow(!show)}
						onTouchStart={() => setShow(!show)}
						onTouchEnd={() => setShow(!show)}
					/>
				)}
			</InputElemWrapper>
		</InputWrapper>
	);
};
