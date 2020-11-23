import React from 'react';

import { Container } from './JinguLogo.styles';
import { JinguLogoProps } from './JinguLogo.interface';

const uri = 'https://www.jingu.ru/sirius/jingu-logo-512.png';

const source = { uri };

export const JinguLogo = ({ style }: JinguLogoProps): JSX.Element => {
  return <Container style={style} source={source} />;
};
