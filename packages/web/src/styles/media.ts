export enum Sizes {
  TABLET = 1024,
  MOBILE = 700
}

type Params = {
  min?: boolean;
};

export const media = (size: number | Sizes, params: Params = {}): string => {
  const maxOrMin = params.min ? 'min' : 'max';
  return `@media screen and (${maxOrMin}-width: ${size}px)`;
};
