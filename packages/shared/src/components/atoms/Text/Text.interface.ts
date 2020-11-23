import { Color } from '@iso/shared';

import { StyleProp, TextStyle } from 'react-native';

export type TextSizes = 'headline' | 'large' | 'normal' | 'name';
export type BoldValues = 300 | 700 | 900;

export type TextProps = {
  text: string;
  size?: TextSizes;
  bold?: BoldValues;
  color?: Color;
  style?: StyleProp<TextStyle>;
};

export type ContainerProps = {
  size: TextSizes;
  bold: BoldValues;
  color: Color;
}
