import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { ButtonClose, Modal, SvgClose } from './BasicModalWindow.styled';
import sprite from '../../images/sprite.svg';
import { Backdrop } from '@mui/material';

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
    <Backdrop onClick={handleClickBackground}>
      <Modal>
        <ButtonClose onClick={() => isToggleModal()}>
          <SvgClose>
            <use href={`${sprite}#icon-x`}></use>
          </SvgClose>
        </ButtonClose>
        {children}
      </Modal>
    </Backdrop>;
  };

  return createPortal(modal, document.querySelector('#modal-window'));
};

export default BasicModalWindow;

BasicModalWindow.propTypes = {
  children: PropTypes.any,
  isToggleModal: PropTypes.func,
};
