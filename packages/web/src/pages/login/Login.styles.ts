import styled from 'styled-components';

import { media, Sizes } from '../../styles/media';

export const Container = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  ${media(Sizes.MOBILE)} {
    grid-template-columns: 1fr;
  }
`;

export const DoMore = styled.img.attrs({
  src: '/do_more.jpg'
})`
  height: 100%;
  width: 100%;
  object-fit: cover;
  
  ${media(Sizes.MOBILE)} {
    display: none;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  
  margin: 0 auto;
  
  max-width: 50%;
`;
