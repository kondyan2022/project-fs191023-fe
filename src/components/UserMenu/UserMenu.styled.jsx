import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const WrapperMenu = styled.div`
  display: flex;
  gap: 16px;
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

export const LinkSvg = styled(NavLink)``;

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
export const LinkLogout = styled(NavLink)`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const Button = styled.button`
  opacity: 0;
  svg {
    width: 20px;
    height: 16px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
