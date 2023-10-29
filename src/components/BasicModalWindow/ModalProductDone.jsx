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
} from './ModalProductDone.styled';

const ModalProductDone = ({ excessCalories, closeModal }) => {
  return (
    <ModalWindow>
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
        <Link to="/diary" onClick={closeModal}>
          <ModalWindowText>
            To the diary
            <ArrowRightIcon>
              <use href={`${sprite}#icon-arrow-right`}> </use>
            </ArrowRightIcon>
          </ModalWindowText>
        </Link>
      </ModalWindowWrap>
    </ModalWindow>
  );
};

export default ModalProductDone;

ModalProductDone.propTypes = {
  calories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
