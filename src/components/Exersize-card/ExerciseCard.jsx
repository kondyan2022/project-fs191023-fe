import CircleCountDown from '../CircleCountDown/CircleCountDown';
import { StyledAddButton } from '../Products/AddModal/AddModal.styled';
import {
  AddButtonPos,
  BurnedPshka,
  BurnedPshkaCost,
  CardBack,
  CardImg,
  CardListInfo,
  ImagePos,
  ListFlex,
  ListImgTimer,
  Pshka,
} from './ExerciseCard.styled';

import { useAddDairyExercisesMutation } from '../../redux/features/userDiaryEndpoints';

const ExerciseCard = ({
  name,
  target,
  bodyPart,
  equipment,
  gifUrl,
  time,
  burnedCalories,
}) => {
  const timeS = time * 60;
  const [addDairyExercise, { isSuccess, isError }] =
    useAddDairyExercisesMutation();

  const handleAddToDiary = () => {
    addDairyExercise(
      name,
      target,
      bodyPart,
      equipment,
      gifUrl,
      time,
      burnedCalories,
    );
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
              />
              <BurnedPshka>
                Burned calories:
                <BurnedPshkaCost>{burnedCalories}</BurnedPshkaCost>
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
        <StyledAddButton onClick={handleAddToDiary}>
          Add to diary
        </StyledAddButton>
      </AddButtonPos>
    </CardBack>
  );
};
export default ExerciseCard;
