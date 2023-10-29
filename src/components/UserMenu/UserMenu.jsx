import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  Button,
  LinkMenu,
  LinkSvg,
  LogoutLink,
  Navigat,
  Photo,
  Text,
  Ul,
  Wrapper,
  WrapperLogout,
  WrapperMenu,
} from './UserMenu.styled';
import spriteSvG from '../../images/sprite.svg';

import {
  useGetCurrentUserQuery,
  useUserLogOutMutation,
} from '../../redux/features/authEndpoints';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/features/userToken';

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useGetCurrentUserQuery();
  const [userLogOut] = useUserLogOutMutation();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    // console.log(userLogOut);
    userLogOut();
    dispatch(logOut());
  };

  console.log(data?.avatarURL);
  const avatarUser = (
    <Photo src={data?.avatarURL} width="37" height="36" alt="Avatar" />
  );

  const avatarLogo = (
    <svg fill="var( --accent-color-user-ava)" width="21" height="21">
      <use href={`${spriteSvG}#icon-user`}></use>
    </svg>
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const openMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <WrapperMenu>
        {showMenu && <MobileMenu onClose={toggleMenu} />}
        <Navigat>
          <Ul>
            <li>
              <LinkMenu to="/profile">Profile</LinkMenu>
            </li>
            <li>
              <LinkMenu to="/">Diary</LinkMenu>{' '}
            </li>
            <li>
              <LinkMenu to="/products">Products</LinkMenu>
            </li>
            <li>
              <LinkMenu to="/exercises">Exercises</LinkMenu>{' '}
            </li>
          </Ul>
        </Navigat>
        <LinkSvg to="/profile">
          <svg width="24" height="24">
            <use href={`${spriteSvG}#icon-settings`} />
          </svg>
        </LinkSvg>
        <Wrapper>{data?.avatarURL ? avatarUser : avatarLogo}</Wrapper>
        <WrapperLogout>
          <LogoutLink to="/" onClick={handleLogOut}>
            <Text>Logout</Text>
            <svg width="24" height="24">
              <use href={`${spriteSvG}#icon-logout`}></use>
            </svg>
          </LogoutLink>
        </WrapperLogout>
        {/* <Logout /> */}
        <Button type="button" onClick={openMenu}>
          <svg width="24" height="24">
            <use href={`${spriteSvG}#icon-menu`} />
          </svg>
        </Button>
      </WrapperMenu>
    </>
  );
};

export default UserMenu;
