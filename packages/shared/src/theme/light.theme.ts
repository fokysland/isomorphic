import { BLACK, GRAY, GREEN, PEACH, SILVER, DARK_GRAY } from './colors';
import { baseTheme } from './base.theme';
import { Theme } from './theme.type';

export const partialLightTheme = {
  colors: {
    main: PEACH,
    text: BLACK,
    text_gray: SILVER,
    placeholder: GRAY,
    background: DARK_GRAY,
    done: GREEN
  },
  shadows: {
    main: '0 2px 15px rgba(0, 0, 0, 0.08)'
  }
};

export const lightTheme: Theme = {
  ...partialLightTheme,
  ...baseTheme,
  colors: {
    ...partialLightTheme.colors,
    ...baseTheme.colors
  }
};
