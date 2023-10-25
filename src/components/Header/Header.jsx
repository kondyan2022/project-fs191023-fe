import Container from '../Container/Container';

import { HeaderContainer } from './Header.styled';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';
export const Header = () => {
  const USER_IS_LOGINING = true;

  return (
    <Container>

      <HeaderContainer
        style={
          USER_IS_LOGINING
            ? { borderBottom: '1px solid rgba(239, 237, 232, 0.20)' }
            : { borderBottom: 'none' }
        }
      >
        <Link to="/">
          <svg width="24" height="24">
            <use href="" />
          </svg>
        </Link>
        {USER_IS_LOGINING && <UserMenu />}
      </HeaderContainer>

    </Container>
  );
};
