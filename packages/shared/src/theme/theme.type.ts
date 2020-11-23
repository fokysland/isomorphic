import { partialLightTheme } from './light.theme';
import { BaseTheme } from './base.theme';

export type PartialTheme = typeof partialLightTheme;

export type Theme = PartialTheme & BaseTheme;

export type Color = keyof Theme['colors'];
