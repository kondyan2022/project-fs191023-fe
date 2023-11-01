import Container from '../Container/Container';
import { isLogin } from '../../redux/selectors';
import { HeaderContainer, SvgLogo } from './Header.styled';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import spriteSvG from '../../images/sprite.svg';

export const Header = () => {
  const isLoggedIn = useSelector(isLogin);

  return (
    <Container>
      <HeaderContainer
        style={
          isLoggedIn
            ? {
                borderBottom: '1px solid rgba(239, 237, 232, 0.20)',
              }
            : { borderBottom: 'none', position: 'absolute', zIndex: 1 }
        }
      >
        <Link to="/">
          <SvgLogo width="126" height="13">
            <use href={`${spriteSvG}#icon-Logo`} />
          </SvgLogo>
        </Link>
        {isLoggedIn && <UserMenu />}
      </HeaderContainer>
    </Container>
  );
};
