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
  
  margin: 0 auto;
  
  max-width: 50%;
  
  padding-top: 80px;

  ${media(Sizes.MOBILE)} {
    padding: 65px 34px 0;
    max-width: none;
  }
`;
