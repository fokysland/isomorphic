import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 50%;
  width: 81px;
  height: 81px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  background: none;
  cursor: pointer;
  position: relative;

  > div:first-of-type {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  > div:last-of-type {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

export const Tick = styled.div`
  height: 30px;
  width: 1.5px;
  background-color: ${({ theme }) => theme.colors.placeholder};
  position: absolute;
  left: 50%;
  top: 50%;
`;
