import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  a {
    margin: 0;
  }
`;
export const Navigat = styled.nav`
  display: none;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    display: block;
    margin-right: 32px;
  }
`;

export const Wrapper = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  border: 1px solid #e6533c;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const LinkSvg = styled(NavLink)`
  svg {
    @media screen and (min-width: 768px) {
      width: 28px;
      height: 27px;
    }
    @media screen and (min-width: 1440px) {
    }
  }
`;

export const LinkMenu = styled(NavLink)`
  font-size: Roboto;
  width: 400;
  size: 16;
  line-height: 24px;
  padding: 10px 27px;
  color: #efede8;
  border-radius: 8px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  &:hover,
  &:focus {
    background: var(--color-orange);
    border: 1px solid var(--color-orange);
  }
  &.active {
    background: var(--color-orange);
    border: 1px solid var(--color-orange);
  }
`;
export const Ul = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
`;
// export const LinkLogout = styled(NavLink)`
//   display: none;
//   @media screen and (min-width: 1440px) {
//     display: block;
//   }
// `;
export const Button = styled.button`
  background: currentColor;
  svg {
    width: 20px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Photo = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    height: 37px;
    width: 37px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const WrapperLogout = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const LogoutLink = styled(NavLink)`
  display: none;
  @media screen and (min-width: 768px) {
  }

  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-white);
  margin-top: 40px;

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    margin-right: 150px;
  }
`;

export const Text = styled.span`
  margin-right: 8px;
  color: rgba(239, 237, 232, 1);
`;
