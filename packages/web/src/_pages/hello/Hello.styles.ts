import styled, { keyframes } from 'styled-components';

import { media, Sizes } from '../../styles/media';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  padding: 5rem 10vw;

  display: flex;
  justify-content: space-between;

  ${media(Sizes.MOBILE)} {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  > div:nth-of-type(2) {
    animation: ${rotate} 2s infinite ease-in-out alternate;
  }

  ${media(Sizes.MOBILE)} {
    margin-top: 90px;

    > div:first-of-type {
      font-size: 40px;
    }

    align-items: center;
  }
`;
