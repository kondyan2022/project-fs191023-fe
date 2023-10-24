import Container from '../../components/Container/Container';
import { DayProducts } from '../../components/DayProducts/DayProducts';
import {DayExercises} from '../../components/DayExercises/DayExercises';
import {DayStatistics} from '../../components/DayStatistics/DayStatistics'
import {PageName,DescktopStyle} from './DiaryPage.styled'
import dayStatistics from '../../../resources/dayStatistics.json';

const DiaryPage = () => {

  return (
  
    <Container>
      <div> 
        <PageName>Diary</PageName>
        <DescktopStyle>
        <DayStatistics dayStatistics={dayStatistics}></DayStatistics>
        <div>
        <DayProducts></DayProducts>
        <DayExercises></DayExercises>
        </div>
        
        </DescktopStyle>
      </div>
      
    </Container>
  );
};

export default DiaryPage;
