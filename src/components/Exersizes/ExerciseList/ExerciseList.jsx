import exercises from '../../../../resources/exercises.json';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { List } from './ExerciseList.styled';

export const ExerciseList = ({ exerciseName }) => {
  const allExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );

  return (
    <List>
      {allExercises.map((exercise) => (
        <li key={exercise._id}>
          <ExerciseItem exerciseCard={exercise} />
        </li>
      ))}
    </List>
  );
};
