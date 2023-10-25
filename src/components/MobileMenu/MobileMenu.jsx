import { useEffect } from 'react';
import {
  CloseButton,
  Link,
  Logout,
  MenuWrapper,
  NavList,
  Overlay,
} from './MobileMenu.styled';

const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleClickBackdrop}>
        <MenuWrapper>
          <CloseButton onClick={onClose}>
            <p>x</p>
          </CloseButton>
          <nav>
            <NavList>
              <li>
                <Link to="/" onClick={onClose}>
                  Diary
                </Link>{' '}
              </li>
              <li>
                <Link to="/products" onClick={onClose}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/exercises" onClick={onClose}>
                  Exercises
                </Link>{' '}
              </li>
            </NavList>
          </nav>
          <Logout type="button" onClick={onClose}>
            <span>Logout</span>
          </Logout>
        </MenuWrapper>
      </Overlay>
    </>
  );
};

export default MobileMenu;
