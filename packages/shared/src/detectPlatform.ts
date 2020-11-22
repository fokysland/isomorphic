import { Platform } from 'react-native';

type OS = typeof Platform['OS'];

export type Platforms = OS | 'server';

export const detectPlatform = (): Platforms => {
  const platform = Platform.OS;
  if (platform === 'web' && !(window && window.document && window.document.createElement)) {
    return 'server';
  }

  return platform;
};
