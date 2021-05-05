import { VFC } from 'react';
import styled from 'styled-components';
import Button from '../Button';

interface Props {
  imgSrc: string;
  width: string;
  height: string;
}

const IconButton: VFC = styled(Button)<Props>`
  background-image: url(${({ imgSrc }) => imgSrc});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export default IconButton;
