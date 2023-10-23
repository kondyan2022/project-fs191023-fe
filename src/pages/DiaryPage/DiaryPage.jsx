import Container from '../../components/Container/Container';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import {DayExercises} from '../../components/DayExercises/DayExercises';
import {DayStatistics} from '../../components/DayStatistics/DayStatistics'
import {PageName} from './DiaryPage.styled'

const DiaryPage = ({dayStatistics}) => {

  return (
  
    <Container>
      <div> 
        <PageName>Diary</PageName>
        <DayStatistics dayStatistics={dayStatistics}></DayStatistics>
        <DayProducts></DayProducts>
        <DayExercises></DayExercises>
      </div>
      
    </Container>
  );
};

export default DiaryPage;
