import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
`;
export const LogoutLink = styled(Link)`
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
`;
