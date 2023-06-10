import React, { memo } from 'react';
import { IDescription } from '@src/components/UI/Description/types';
import { DescriptionItem } from '@src/components/UI/Description/style';

const Description: React.FC<IDescription> = (props) => {
  const { fz, margin, color, children, height, align } = props;
  return (
    <DescriptionItem fz={fz} margin={margin} color={color} height={height} align={align}>
      {children}
    </DescriptionItem>
  );
};

export default memo(Description);
