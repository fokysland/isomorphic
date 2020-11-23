import styled from 'styled-components/native';

import { ContainerProps, TextSizes } from './Text.interface';

const mapTextSizesToRems: Record<TextSizes, number> = {
  large: 1.4,
  normal: 1,
  headline: 3.2,
  name: 7,
};

export const Container = styled.Text<ContainerProps>`
  font-family: Roboto;
  color: ${({ theme, color }) => theme.colors[color]};
  font-size: ${({ size }) => mapTextSizesToRems[size]}rem;
  font-weight: ${({ bold }) => bold};
`;
