import Container from '../Container/Container';

import { HeaderContainer } from './Header.styled';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';

import StyledDatepickerBirthday from '../Calendar/StyledDatepickerBirthday'
export const Header = () => {
  const USER_IS_LOGINING = true;

  return (
    <Container>
      <StyledDatepickerBirthday/>
      {/* <Navigation>
        <StyledLink to="/signin">Sign In</StyledLink>
        <StyledLink to="/signup">Sign Up</StyledLink> 
        /* тестові роути логіна та реєстрації
        <StyledLink to="/profile">Profile</StyledLink>
        <StyledLink to="/">Diary</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/exercises">Exercises</StyledLink>
      </Navigation> */}

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
