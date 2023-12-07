import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ExercisesNav = styled.nav`
  display: flex;
  gap: 28px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-left: auto;
  }
`;

export const ExerciseNavLink = styled(NavLink)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  /* font-weight: 400; */
  line-height: 1.28;
  cursor: pointer;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    /* font-weight: 400; */
    line-height: 1.125;
  }

  &.active {
    color: var(--color-white);
  }

  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--color-orange-one);
    @media screen and (max-width: 767.99px) {
      bottom: -8px;
    }
  }
`;
