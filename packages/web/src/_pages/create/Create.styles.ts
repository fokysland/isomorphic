import styled from 'styled-components';

import { media, Sizes } from '../../styles/media';

export const Container = styled.div`
  padding-top: 138px;
  padding-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  max-width: 325px;
  width: 100%;

  ${media(Sizes.MOBILE)} {
    max-width: none;
    width: calc(100% - 60px);
    padding-left: 30px;
    padding-right: 30px;
    align-items: flex-start;
  }
`;

export const UpperContainer = styled.div`
  position: relative;
  margin-bottom: 80px;
  
  > button:first-of-type {
    position: absolute;
    left: calc(100% + 80px);
    transform: translateY(-10%);
  }
  
  ${media(Sizes.MOBILE)} {
    > button:first-of-type {
      display: none;
    }
  }
`;
