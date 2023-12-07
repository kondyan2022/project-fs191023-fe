import { useMemo, useState } from 'react';
import { ExerciseItem } from '../ExerciseItem/ExerciseItem';
import { BackgroundImage, ExList } from './ExerciseList.styled';
import { useGetAllExercisesQuery } from '../../../redux/features/exerciseEndpoints';
import Backdrop from '../../Backdrop/Backdrop';
import { RotatingLines } from 'react-loader-spinner';
import { useParams, useSearchParams } from 'react-router-dom';

export const ExerciseList = () => {
  const {
    data: exercises,
    isFetching,
    // error,
    // isError,
  } = useGetAllExercisesQuery();
  const { board } = useParams();
  const [searchParams] = useSearchParams();

  const [noScroll, setNoScroll] = useState(false);

  const allExercises = useMemo(() => {
    return exercises
      ? exercises.filter(
          (exercise) => exercise[board] === searchParams.get('value'),
        )
      : [];
  }, [exercises, searchParams, board]);

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
