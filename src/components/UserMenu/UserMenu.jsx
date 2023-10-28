import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  Button,
  LinkMenu,
  LinkSvg,
  Navigat,
  Ul,
  Wrapper,
  WrapperMenu,
} from './UserMenu.styled';
import spriteSvG from '../../images/sprite.svg';
import Logout from '../Logout/Logout';

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

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
        <Wrapper>{avatarLogo}</Wrapper>
        {/* <img src="" alt="" /> */}
        <Logout />
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
