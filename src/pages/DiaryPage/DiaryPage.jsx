import Container from '../../components/Container/Container';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';

// import {useGetUserDiaryQuery} from '../../redux/features/userDiaryEndpoints';
import {DayDashboard} from '../../components/DayDashboard/DayDashboard'
import {PageName,DescktopStyle,HederOfPage} from './DiaryPage.styled'
import dayStatistics from '../../../resources/dayStatistics.json';
import oneProductTest from '../../../resources/oneProductTest.json'
import exercisesTest from '../../../resources/exercisesTest.json'
import DayInformation from '../../../resources/DayInformation.json'
import StyledDatepicker from '../../components/Calendar/StyledDatepicker'


const DiaryPage = () => {
  // const currentDate = new Date();
 
  // const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  // const day = String(currentDate.getDate()).padStart(2, '0');
  // const year = currentDate.getFullYear();
  // const date = `${year}${month}${day}`

 
//  const {data} = useGetUserDiaryQuery(date, {skip: !date});
// 
// console.log(data.products)data.exercises
// console.log(data)
  
  return (
    <Container>
      <div>
        <HederOfPage>
        <PageName>Diary</PageName>
        <StyledDatepicker/>
        </HederOfPage>
        <DescktopStyle>

        <DayDashboard dayStatistics={dayStatistics} dayInformation={DayInformation}></DayDashboard>
        <div>
        <OnTheDay oneProductTest={oneProductTest} exercisesTest={exercisesTest}></OnTheDay>
        </div>
        

        </DescktopStyle>
      </div>
    </Container>
  );
};

export default DiaryPage;
