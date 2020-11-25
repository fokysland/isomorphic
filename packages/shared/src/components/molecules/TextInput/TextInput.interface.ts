import { StyleProp, ViewStyle } from 'react-native';

export type TextInputProps = {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  multiline?: boolean;
  isPassword?: boolean;
  style?: StyleProp<ViewStyle>;
};
