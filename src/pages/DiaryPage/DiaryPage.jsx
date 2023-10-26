import Container from '../../components/Container/Container';
import { DayProducts } from '../../components/DayProducts/DayProducts';

import {DayExercises} from '../../components/DayExercises/DayExercises';
import {DayDashboard} from '../../components/DayDashboard/DayDashboard'
import {PageName,DescktopStyle} from './DiaryPage.styled'
import dayStatistics from '../../../resources/dayStatistics.json';
import oneProductTest from '../../../resources/oneProductTest.json'
import DayInformation from '../../../resources/DayInformation.json'



const DiaryPage = () => {
  return (
    <Container>
      <div>
        <PageName>Diary</PageName>
        <DescktopStyle>

        <DayDashboard dayStatistics={dayStatistics} dayInformation={DayInformation}></DayDashboard>
        <div>
        <DayProducts oneProductTest={oneProductTest}></DayProducts>
        <DayExercises></DayExercises>
        </div>
        

        </DescktopStyle>
      </div>
    </Container>
  );
};

export default DiaryPage;
