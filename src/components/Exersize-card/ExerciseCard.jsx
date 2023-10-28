import CircleCountDown from '../CircleCountDown/CircleCountDown';
import { StyledAddButton } from '../Products/AddModal/AddModal.styled';
import image from '../../images/../images/side-gym-desktop-tab-2x.jpg';
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

import { useState } from 'react';

const ExerciseCard = ({
  name,
  target,
  bodyPart,
  equipment,
  gifUrl,
  time,
  calories,
}) => {
  const timeS = time * 60;
  const [passedPart, setPassedPart] = useState(0);
  return (
    <CardBack>
      <ListFlex>
        <li>
          <ListImgTimer>
            <li>
              <ImagePos>
                <CardImg src={image} />
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
                Burned calories: <BurnedPshkaCost>{calories}</BurnedPshkaCost>
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
        <StyledAddButton>Add to diary</StyledAddButton>
      </AddButtonPos>
    </CardBack>
  );
};
export default ExerciseCard;
