import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  gap: 14px;
  height: 61px;
  @media screen and (min-width: 768px) {
    height: 84px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const SvgLogo = styled.svg`
  width: 126px;
  height: 13px;
  @media screen and (min-width: 768px) {
    width: 151px;
    height: 17px;
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
