import { Link } from 'react-router-dom';
import avocado from '../../images/avocado-2x.png';
import sprite from '../../images/sprite.svg';

import { PropTypes } from 'prop-types';
import {
  ArrowRightIcon,
  ModalWindow,
  ModalWindowBtn,
  ModalWindowImg,
  ModalWindowSpan,
  ModalWindowText,
  ModalWindowTitle,
  ModalWindowWrap,
  ModalWindowWrapImg,
} from './AddProductSuccess.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseButton } from '../Products/AddModal/AddModal.styled';

const AddProductSuccess = ({ excessCalories, closeModal }) => {
    useEffect(() => {
      const closeESC = (e) => {
        if (e.code === 'Escape') {
          closeModal();
        }
      };
      document.addEventListener('keydown', closeESC);

      return () => {
        document.removeEventListener('keydown', closeESC);
      };
    }, [closeModal]);
  
    const handleClickBackground = (e) => {
      if (e.currentTarget === e.target) {
        closeModal();
      }
  };
  
  return createPortal(
    <Backdrop onClick={handleClickBackground}>
      <ModalWindow>
        <CloseButton onClick={closeModal}>
          <svg>
            <use href={`${sprite}#icon-x`}></use>
          </svg>
        </CloseButton>
        <ModalWindowWrap>
          <ModalWindowWrapImg>
            <ModalWindowImg src={avocado} alt="avocado" />
            <ModalWindowTitle>Well done</ModalWindowTitle>
            <ModalWindowText>
              Calories: <ModalWindowSpan>{excessCalories}</ModalWindowSpan>
            </ModalWindowText>
          </ModalWindowWrapImg>
          <Link to="/products" onClick={closeModal}>
            <ModalWindowBtn>Next product</ModalWindowBtn>
          </Link>
          <Link to="/" onClick={closeModal}>
            <ModalWindowText>
              To the diary
              <ArrowRightIcon>
                <use href={`${sprite}#icon-arrow-right`}> </use>
              </ArrowRightIcon>
            </ModalWindowText>
          </Link>
        </ModalWindowWrap>
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#modal-root'),
  );
};

export default AddProductSuccess;

AddProductSuccess.propTypes = {
  excessCalories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
