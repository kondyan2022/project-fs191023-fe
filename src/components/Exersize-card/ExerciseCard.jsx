import CircleCountDown from '../CircleCountDown/CircleCountDown';
import { StyledAddButton } from '../Products/AddModal/AddModal.styled';
import { useState } from 'react';
import {
  AddButtonPos,
  BurnedPshka,
  BurnedPshkaCost,
  CardBack,
  CardImg,
  CardListInfo,
  CloseButton,
  ImagePos,
  ListFlex,
  ListImgTimer,
  Pshka,
  StyledDisableButton,
} from './ExerciseCard.styled';
import iconSvg from '../../images/sprite.svg';

import { useAddDairyExercisesMutation } from '../../redux/features/userDiaryEndpoints';

const ExerciseCard = ({
  id,
  date,
  name,
  target,
  bodyPart,
  equipment,
  gifUrl,
  time,
  burnedCalories,
  setIsAddModalOpen,
}) => {
  const [calories, setCalories] = useState(0);
  const timeS = time * 60;
  const [addDairyExercise] = useAddDairyExercisesMutation();
  const [isRunning, setIsRunning] = useState(false);
  const handleAddToDiary = () => {
    addDairyExercise({ exercise: id, date, time, calories });
  };
  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  return (
    <CardBack>
      <ListFlex>
        <li>
          <ListImgTimer>
            <li>
              <ImagePos>
                <CardImg src={gifUrl} />
              </ImagePos>
            </li>
            <li>
              <Pshka>Time</Pshka>
              <CircleCountDown
                timeInSecond={timeS}
                size={125}
                strokeColor={'#E6533C'}
                strokeBgColor={'#4d4d4d'}
                strokeWidth={4}
                tipWidth={7}
                isRunning={isRunning}
                setIsRunning={setIsRunning}
              >
                {(e) => {
                  setCalories(Math.round(burnedCalories * (1 - -e)));
                }}
              </CircleCountDown>
              <BurnedPshka>
                Burned calories:
                <BurnedPshkaCost>{calories}</BurnedPshkaCost>
              </BurnedPshka>
            </li>
          </ListImgTimer>
        </li>
        <li>
          <CardListInfo>
            <li>
              <Pshka>Name</Pshka>
              <h5>{name}</h5>
            </li>
            <li>
              <Pshka>Target</Pshka>
              <h5>{target}</h5>
            </li>
            <li>
              <Pshka>Body Part</Pshka>
              <h5>{bodyPart}</h5>
            </li>
            <li>
              <Pshka>Equipment</Pshka>
              <h5>{equipment}</h5>
            </li>
          </CardListInfo>
        </li>
      </ListFlex>
      <AddButtonPos>
        {isRunning ? (
          <StyledDisableButton>Add to diary</StyledDisableButton>
        ) : (
          <StyledAddButton onClick={handleAddToDiary}>
            Add to diary
          </StyledAddButton>
        )}
      </AddButtonPos>
      <CloseButton onClick={closeModal}>
        <use href={`${iconSvg}#icon-close`} />
      </CloseButton>
    </CardBack>
  );
};
export default ExerciseCard;
