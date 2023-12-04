import { useMemo, useState } from 'react';
// import exercises from '../../../../resources/exercises.json';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { BackgroundImage, ExList } from './ExerciseList.styled';
import { useGetAllExercisesQuery } from '../../../redux/features/exerciseEndpoints';
import Backdrop from '../../Backdrop/Backdrop';
import { RotatingLines } from 'react-loader-spinner';

export const ExerciseList = ({
  exerciseName,
  handleBoardClick,
  handleExNameClick,
}) => {
  const {
    data: exercises,
    isFetching,
    // error,
    // isError,
  } = useGetAllExercisesQuery();

  if (exerciseName) {
    handleBoardClick(exerciseName);
    handleExNameClick(exerciseName);
  }
  const [noScroll, setNoScroll] = useState(false);

  const allExercises = useMemo(
    () =>
      exercises
        ? exercises.filter(
            (exercise) =>
              exercise.bodyPart === exerciseName ||
              exercise.target === exerciseName ||
              exercise.equipment === exerciseName,
          )
        : [],
    [exercises, exerciseName],
  );

  return (
    <>
      <ExList noScroll={noScroll}>
        {allExercises.map((exercise) => (
          <ExerciseItem
            key={exercise._id}
            exerciseCard={exercise}
            setNoScroll={setNoScroll}
          />
        ))}
      </ExList>
      <BackgroundImage />
      {isFetching && (
        <Backdrop closeOnClick={false} closeOnEscape={false}>
          <RotatingLines
            strokeColor="#e6533c"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Backdrop>
      )}
    </>
  );
};
