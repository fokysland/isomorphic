import { StyleProp, ViewStyle } from 'react-native';

export type CreateTaskProps = {
  onCreate: () => void;
  style?: StyleProp<ViewStyle>;
};
