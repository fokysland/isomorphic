import styled from 'styled-components';
import { media, Sizes } from '../../styles/media';

export const Container = styled.main`
  padding-top: 138px;
  padding-bottom: 20px;
  
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${media(1200)} {
    padding-top: 107px;
    padding-left: 35px;
  }
  
  ${media(Sizes.MOBILE)} {
    padding-right: 35px;
    align-items: flex-start;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 325px);
  grid-gap: 20px;
  justify-items: center;

  ${media(1200)} {
    grid-template-columns: 1fr 1fr;
  }
  
  ${media(Sizes.MOBILE)} {
    grid-template-columns: 1fr;
    width: 100%;
    
    > div {
      width: 180px;
    }
    
    > div:nth-child(2n) {
      justify-self: start;
    }
    
    > div:nth-child(2n + 1) {
      justify-self: end;
    }
    
    > a {
      display: none;
    }
  }
`;

export const BandageContainer = styled.div`
  position: fixed;
  top: 138px;
  right: 0;

  z-index: 5;

  ${media(Sizes.MOBILE)} {
    top: 107px;
  }
`;

export const AddButtonContainer = styled.div`
  position: fixed;
  bottom: 35px;
  right: 20px;

  z-index: 5;
  
  ${media(Sizes.MOBILE, { min: true })} {
    display: none;
  }
`;

