import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { LogoutLink, Text, Wrapper } from './Logout.styled';
import { useUserLogOutMutation } from '../../redux/features/authEndpoints';

const Logout = () => {
  const dispatch = useDispatch();
  const logout = useUserLogOutMutation();
  const handleLogOut = () => dispatch(logout());

  return (
    <Wrapper>
      <LogoutLink to="/" onClick={handleLogOut}>
        <Text>Logout</Text>
        <svg width="24" height="24">
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
      </LogoutLink>
    </Wrapper>
  );
};

export default Logout;
