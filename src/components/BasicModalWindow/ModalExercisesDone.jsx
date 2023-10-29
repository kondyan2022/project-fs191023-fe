import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import like from '../../images/like-2x.png';
import sprite from '../../images/sprite.svg';

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

const ModalExercisesDone = ({ calories, time, closeModal }) => {
  return (
    <ModalWindow>
      <ModalWindowWrap>
        <ModalWindowWrapImg>
          <ModalWindowImg src={like} alt="like" />
          <ModalWindowTitle>Well done</ModalWindowTitle>
          <ModalWindowText>
            Your time: <ModalWindowSpan>{time}</ModalWindowSpan>
          </ModalWindowText>
          <ModalWindowText>
            Burned calories:: <ModalWindowSpan>{calories}</ModalWindowSpan>
          </ModalWindowText>
        </ModalWindowWrapImg>
        <Link to="/products" onClick={closeModal}>
          <ModalWindowBtn>Next exercise</ModalWindowBtn>
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

export default ModalExercisesDone;

ModalExercisesDone.propTypes = {
  calories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
