import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
// <<<<<<< exercise-card-fix

// const AddExercisesSuccess = ({
//   burnedCalories,
//   time,
//   closeModal,
//   isAddModalOpen,
// }) => {
//   return (
//     <>
//       {isAddModalOpen && (
//         <ModalWindow>
//           <ModalWindowWrap>
//             <ModalWindowWrapImg>
//               <ModalWindowImg src={like} alt="like" />
//               <ModalWindowTitle>Well done</ModalWindowTitle>
//               <ModalWindowText>
//                 Your time:{' '}
//                 <ModalWindowSpan>{time ? time : 0} minutes</ModalWindowSpan>
//               </ModalWindowText>
//               <ModalWindowText>
//                 Burned calories::{' '}
//                 <ModalWindowSpan>
//                   {burnedCalories ? burnedCalories : 0}
//                 </ModalWindowSpan>
//               </ModalWindowText>
//             </ModalWindowWrapImg>
//             <Link to="/exercises" onClick={closeModal}>
//               <ModalWindowBtn>Next exercise</ModalWindowBtn>
//             </Link>
//             <Link to="/diary" onClick={closeModal}>
//               <ModalWindowText>
//                 To the diary
//                 <ArrowRightIcon>
//                   <use href={`${sprite}#icon-arrow-right`}> </use>
//                 </ArrowRightIcon>
//               </ModalWindowText>
//             </Link>
//           </ModalWindowWrap>
//         </ModalWindow>
//       )}
//     </>
// =======

import { createPortal } from 'react-dom';
import {
  Backdrop,
  CloseButton,
} from '../../components/Products/AddModal/AddModal.styled.jsx';

const AddExercisesSuccess = ({ burnedCalories, time, closeModal }) => {
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
    </Backdrop>,
    document.querySelector('#modal-root'),

  );
};

export default AddExercisesSuccess;

AddExercisesSuccess.propTypes = {
  burnedCalories: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};
