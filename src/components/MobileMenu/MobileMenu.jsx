import { useEffect } from 'react';
import {
  CloseButton,
  Link,
  MenuWrapper,
  NavList,
  Overlay,
} from './MobileMenu.styled';
import Logout from '../Logout/Logout';
import { useSelector } from 'react-redux';
import { hasProfile } from '../../redux/selectors';

const MobileMenu = ({ onClose }) => {
  const isProfile = useSelector(hasProfile);

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
          {isProfile && (
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
          )}
          <Logout />
          {/* <Logout type="button" onClick={onClose}>
            <span>Logout</span>
          </Logout> */}
        </MenuWrapper>
      </Overlay>
    </>
  );
};

export default MobileMenu;
