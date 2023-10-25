import exercises from '../../../../resources/exercises.json';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';

export const ExerciseList = ({ exerciseName }) => {
  const allExercises = exercises.filter(
    (exercise) =>
      exercise.bodyPart ||
      exercise.target ||
      exercise.equipment === exerciseName,
  );

  return (
    <ul>
      {allExercises.map((exercise) => (
        <li key={exercise._id}>
          <ExerciseItem exerciseCard={exercise} />
        </li>
      ))}
    </ul>
  );
};
