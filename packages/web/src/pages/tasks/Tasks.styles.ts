import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 138px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 325px);
  grid-gap: 20px;
  justify-items: center;

  margin: 0 auto;
`;
