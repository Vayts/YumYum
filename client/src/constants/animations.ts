import { keyframes } from 'styled-components';

export const opacityAppear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const scaleAppear = keyframes`
  from {
    opacity: 0;
	  scale: 0.8;
  }

  to {
    opacity: 1;
    scale: 1;
  }
`;

export const leftAppear = keyframes`
  from {
    left: -10%;
  }

  to {
    left: 0;
  }
`;
