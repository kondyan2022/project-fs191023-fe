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

export const ExerciseItem = ({ exerciseCard }) => {
  const {
    target,
    bodyPart,
    burnedCalories,
    name,
    id,
    equipment,
    gifUrl,
    time,
  } = exerciseCard;

  const capitalizeFirstLeter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

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
          calories={burnedCalories}
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
            Body part: <Span>{capitalizeFirstLeter(bodyPart)}</Span>
          </StatData>
          <StatData>
            Target: <Span>{capitalizeFirstLeter(target)}</Span>
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
