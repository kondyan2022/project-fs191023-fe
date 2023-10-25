import { useState } from 'react';
import MobileMenu from '../MobileMenu/MobileMenu';
import {
  Button,
  LinkLogout,
  LinkMenu,
  LinkSvg,
  Navigat,
  Ul,
  WrapperMenu,
} from './UserMenu.styled';

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

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
            <use href="" />
          </svg>
        </LinkSvg>
        <img src="" alt="" />
        <LinkLogout>
          Logout
          <svg width="24" height="24">
            <use href="" />
          </svg>
        </LinkLogout>
        <Button type="button" onClick={openMenu}>
          <svg width="24" height="24">
            <use href="" />
          </svg>
        </Button>
      </WrapperMenu>
    </>
  );
};

export default UserMenu;
