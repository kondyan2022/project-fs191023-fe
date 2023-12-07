import { ExercisesNavigation } from '../ExercisesNavigation/ExercisesNavigation';
import {
  ExercisesBox,
  ExercisesPageWrap,
  ExercisesTitle,
} from './ExercisesWrap.styled';
import { ExerciseList } from '../ExerciseList/ExerciseList';
import { useParams, useSearchParams } from 'react-router-dom';
import { ExerciseBoards } from '../ExercisesBoard/ErerciseBoards';
import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

const exerciseGroups = {
  bodyPart: 'Body parts',
  equipment: 'Equipment',
  target: 'Muscles',
};

export const ExerciseWrap = () => {
  const [title, setTitle] = useState('Exercises');
  const { board } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const value = searchParams.get('value');
    if (value) {
      setTitle(capitalizeFirstLetter(value));
    } else {
      setTitle('Exercises');
    }
  }, [board, searchParams]);

  return (
    <ExercisesPageWrap>
      <ExercisesBox>
        <ExercisesTitle>{title}</ExercisesTitle>
        <ExercisesNavigation />
      </ExercisesBox>
      {searchParams.get('value') ? (
        <ExerciseList filter={exerciseGroups[board]} />
      ) : (
        <ExerciseBoards filter={exerciseGroups[board]} />
      )}
    </ExercisesPageWrap>
  );
};
