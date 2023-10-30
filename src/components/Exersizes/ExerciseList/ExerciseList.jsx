import exercises from '../../../../resources/exercises.json';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { ExList, BackgroundImage } from './ExerciseList.styled';

export const ExerciseList = ({ exerciseName, handleBoardClick, handleExNameClick }) => {
  
  if (exerciseName) {
    handleBoardClick(exerciseName);
    handleExNameClick(exerciseName);
  }

  const allExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );

  return (
    <>
      <ExList>
        {allExercises.map((exercise) => (
          <li key={exercise._id}>
            <ExerciseItem exerciseCard={exercise} />
          </li>
        ))}
      </ExList>
      <BackgroundImage />
    </>
  );
};
