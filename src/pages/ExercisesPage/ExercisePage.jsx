import Container from '../../components/Container/Container';
import { ExerciseList } from '../../components/Exersizes/ExerciseList/ExerciseList';
import { ExersizeWrap } from '../../components/Exersizes/ExercisesWrap/ExercisesWrap';

const ExercisesPage = () => {
  return (
    <Container>
      <ExersizeWrap>
        <ExerciseList />
      </ExersizeWrap>
    </Container>
  );
};

export default ExercisesPage;
