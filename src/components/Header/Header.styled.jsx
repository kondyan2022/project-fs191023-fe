import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  gap: 14px;
  height: 61px;
  @media screen and (min-width: 768px) {
    height: 84px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Button = styled.button`
  opacity: 0;
  width: 20px;
  height: 16px;
  background-color: red;
  svg {
  }
`;
