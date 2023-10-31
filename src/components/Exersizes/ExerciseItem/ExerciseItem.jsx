import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import {
  ListItem,
  Workout,
  TitleBlock,
  IconWraper,
  Title,
  Statistics,
  StatData,
  Span,
  Button,
} from './ExerciseItem.styled';

import ExerciseCard from '../../Exersize-card/ExerciseCard';
// import diary from '../../../../resources/exercises.json';

export const ExerciseItem = ({ exerciseCard }) => {
  const {
    target,
    bodyPart,
    burnedCalories,
    name,
    id,
    // date,
    equipment,
    gifUrl,
    time,
  } = exerciseCard;

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  // const diary = {
  //   name: 'name',
  //   target: 'Strength',
  //   bodyPart: 'Legs',
  //   equipment: 'Dumbbells',
  //   gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
  //   time: 1,
  //   date: '2023/10/24',
  //   id: '64f2458d6f67bc34bae4f7f7',
  //   burnedCalories: 300,
  // };

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      {isAddModalOpen && (
        <ExerciseCard
          target={capitalizeFirstLeter(target)}
          bodyPart={capitalizeFirstLeter(bodyPart)}
          equipment={capitalizeFirstLeter(equipment)}
          gifUrl={gifUrl}
          time={time}
          id={id}
          burnedCalories={burnedCalories}
          name={capitalizeFirstLeter(name)}
          setIsAddModalOpen={setIsAddModalOpen}
        />
      )}
      <ListItem>
        <Workout>WORKOUT</Workout>
        <TitleBlock>
          <IconWraper>
            <svg
              width="24"
              height="24"
              style={{
                fill: '#EFEDE8',
                zIndex: 10,
              }}
            >
              <use href={sprite + '#icon-run-man'} />
            </svg>
          </IconWraper>

          <Title>{capitalizeFirstLeter(name)}</Title>
        </TitleBlock>
        <Statistics>
          <StatData>
            Burned calories: <Span>{burnedCalories}</Span>
          </StatData>
          <StatData>
            Body part: <Span>{bodyPart}</Span>
          </StatData>
          <StatData>
            Target: <Span>{target}</Span>
          </StatData>
        </Statistics>
        <Button type="button" onClick={openModal}>
          Start
          <svg style={{ verticalAlign: 'top', stroke: '#E6533C' }}>
            <use href={sprite + '#icon-arrow'} />
          </svg>
        </Button>
      </ListItem>
    </>
  );
};
