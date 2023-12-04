import { useEffect, useState } from 'react';
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

export const ExerciseItem = ({ exerciseCard, setNoScroll }) => {
  const { target, bodyPart, burnedCalories, name, equipment, gifUrl, time } =
    exerciseCard;

  const capitalizeFirstLetter = (string) => {
    const newString = string.slice(0, 1).toUpperCase() + string.slice(1);
    return newString;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      setNoScroll(true);
      console.log(document.body.style.overflow);
    }

    // console.log(document.body.style.overflow);
  }, [isModalOpen, setNoScroll]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = 'scroll';
      setNoScroll(false);
      // console.log(document.body.style.overflow);
    }
  }, [isModalOpen, setNoScroll]);

  return (
    <>
      {isModalOpen && (
        <ExerciseCard
          target={capitalizeFirstLetter(target)}
          bodyPart={capitalizeFirstLetter(bodyPart)}
          equipment={capitalizeFirstLetter(equipment)}
          gifUrl={gifUrl}
          time={time}
          id={exerciseCard._id}
          burnedCalories={burnedCalories}
          name={capitalizeFirstLetter(name)}
          setIsModalOpen={setIsModalOpen}
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

          <Title>{capitalizeFirstLetter(name)}</Title>
        </TitleBlock>
        <Statistics>
          <StatData>
            Burned calories: <Span>{burnedCalories}</Span>
          </StatData>
          <StatData>
            Body part: <Span>{capitalizeFirstLetter(bodyPart)}</Span>
          </StatData>
          <StatData>
            Target: <Span>{capitalizeFirstLetter(target)}</Span>
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
