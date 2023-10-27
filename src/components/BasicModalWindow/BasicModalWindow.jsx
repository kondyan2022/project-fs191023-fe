import { createPortal } from 'react-dom';
import {
  ButtonClose,
  MainWindow,
  Modal,
  SvgClose,
} from './BasicModalWindow.styled';
import sprite from '../../images/sprite.svg';
import { useEffect } from 'react';

const BasicModalWindow = ({ children, isToggleModal }) => {
  useEffect(() => {
    const closeESC = (e) => {
      if (e.code === 'Escape') {
        isToggleModal();
      }
    };
    document.addEventListener('keydown', closeESC);

    return () => {
      document.removeEventListener('keydown', closeESC);
    };
  }, [isToggleModal]);

  const handleClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      isToggleModal();
    }
  };

  const modal = () => {
    <MainWindow onClick={handleClickBackground}>
      <Modal>
        <ButtonClose onClick={() => isToggleModal()}>
          <SvgClose>
            <use href={`${sprite}#icon-x`}></use>
          </SvgClose>
        </ButtonClose>
      </Modal>
      {children}
    </MainWindow>;
  };
  return createPortal(modal, document.querySelector('#modal-window'));
};

export default BasicModalWindow;
