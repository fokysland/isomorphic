import React, { useEffect, useRef } from 'react';

import { Animated } from 'react-native';

import { styles } from './Emoji.styles';
import { EmojiProps } from './Emoji.interface';

const uri =
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/271/rocket_1f680.png';

const source = { uri };

export const Emoji = ({ style }: EmojiProps): JSX.Element => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      })
    ).start();
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <Animated.Image
      style={[styles.container, style, { transform: [{ rotate }] }]}
      source={source}
    />
  );
};
