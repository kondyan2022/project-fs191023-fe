import { createPortal } from 'react-dom';
import { MainWindow } from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {
  const modal = () => {
    <MainWindow>{children}</MainWindow>;
  };
  return createPortal(modal, document.querySelector('#modal-window'));
};

export default BasicModalWindow;
