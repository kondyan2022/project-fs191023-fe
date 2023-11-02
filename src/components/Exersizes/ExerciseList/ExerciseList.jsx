import { useEffect, useState } from 'react';
import exercises from '../../../../resources/exercises.json';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { ExList, BackgroundImage } from './ExerciseList.styled';

export const ExerciseList = ({
  exerciseName,
  handleBoardClick,
  handleExNameClick,
}) => {
  if (exerciseName) {
    handleBoardClick(exerciseName);
    handleExNameClick(exerciseName);
  }
  const [noScroll, setNoScroll] = useState(false);
  const allExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart === exerciseName ||
      exercise.target === exerciseName ||
      exercise.equipment === exerciseName,
  );

  return (
    <>
      <ExList noScroll={noScroll}>
        {allExercises.map((exercise) => (
          <li key={exercise._id.$oid}>
            <ExerciseItem exerciseCard={exercise} setNoScroll={setNoScroll} />
          </li>
        ))}
      </ExList>
      <BackgroundImage />
    </>
  );
};
