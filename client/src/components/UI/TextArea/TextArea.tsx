import React from 'react';
import { ITextArea } from '@src/components/UI/TextArea/types';
import { TextAreaElem, TextAreaElemWrapper, TextAreaLabel, TextAreaWrapper } from '@src/components/UI/TextArea/style';

export const TextArea: React.FC<ITextArea> = (props) => {
  const {
    height,
    padding,
    margin,
    fz,
    label,
    value,
    placeholder,
    width,
    onChange,
    id,
    name,
    isValid,
    min,
    max,
  } = props;
	
  return (
    <TextAreaWrapper margin={margin} width={width} height={height}>
      {label && <TextAreaLabel htmlFor={id} isValid={isValid !== undefined ? isValid : true}>{label}</TextAreaLabel>}
      <TextAreaElemWrapper>
        <TextAreaElem
          name={name}
          onChange={(e) => onChange(e)}
          value={value}
          placeholder={placeholder as string}
          height={height}
          padding={padding}
          isValid={isValid !== undefined ? isValid : true}
          fz={fz}
          id={id}
          aria-label={name}
          minLength={min}
          maxLength={max}
        />
      </TextAreaElemWrapper>
    </TextAreaWrapper>
  );
};
