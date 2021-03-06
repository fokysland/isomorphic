import { Color } from '@iso/shared';
import { StyleProp, ViewStyle } from 'react-native';

export type ButtonProps = {
  text: string;
  onClick: () => void;
  textColor?: Color;
  backgroundColor?: Color;
  style?: StyleProp<ViewStyle>;
};

export type ContainerProps = {
  color: Color;
};
