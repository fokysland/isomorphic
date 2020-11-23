import { StyleProp, ViewStyle } from 'react-native';

export type TaskCardProps = {
  id: string;
  title: string;
  date: Date;
  onDone: (id: string) => void;
  style?: StyleProp<ViewStyle>;
};
