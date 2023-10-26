import Container from '../../components/Container/Container';
import { ExerciseList } from '../../components/Exersizes/ExerciseList/ExerciseList';
import { ExercisesNavigation } from '../../components/Exersizes/ExercisesNavigation/ExercisesNavigation';
import { ExersizeWrap } from '../../components/Exersizes/ExercisesWrap/ExercisesWrap';

const ExercisesPage = () => {
  return (
    <Container>
      <ExersizeWrap>
        <ExerciseList />
        <ExercisesNavigation />
      </ExersizeWrap>
    </Container>
  );
};

export default ExercisesPage;
