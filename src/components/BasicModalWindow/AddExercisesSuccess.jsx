import { Link } from 'react-router-dom';
import { useState } from 'react';
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
} from './AddProductSuccess.styled';

const AddExercisesSuccess = ({ burnedCalories, time }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const closeModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      {isAddModalOpen && (
        <ModalWindow>
          <ModalWindowWrap>
            <ModalWindowWrapImg>
              <ModalWindowImg src={like} alt="like" />
              <ModalWindowTitle>Well done</ModalWindowTitle>
              <ModalWindowText>
                Your time:{' '}
                <ModalWindowSpan>{time ? time : 0} minutes</ModalWindowSpan>
              </ModalWindowText>
              <ModalWindowText>
                Burned calories::{' '}
                <ModalWindowSpan>
                  {burnedCalories ? burnedCalories : 0}
                </ModalWindowSpan>
              </ModalWindowText>
            </ModalWindowWrapImg>
            <Link to="/exercises" onClick={closeModal}>
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
      )}
    </>
  );
};

export default AddExercisesSuccess;

AddExercisesSuccess.propTypes = {
  calories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
