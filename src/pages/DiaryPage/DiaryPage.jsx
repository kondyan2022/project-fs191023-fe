import DayInformation from '../../../resources/DayInformation.json';
import dayStatistics from '../../../resources/dayStatistics.json';
import exercisesTest from '../../../resources/exercisesTest.json';
import oneProductTest from '../../../resources/oneProductTest.json';
import StyledDatepicker from '../../components/Calendar/StyledDatepicker';
import Container from '../../components/Container/Container';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';
import { DescktopStyle, HederOfPage, PageName } from './DiaryPage.styled';

const DiaryPage = () => {
  return (
    <>
      <Container>
        <div>
          <HederOfPage>
            <PageName>Diary</PageName>
            <StyledDatepicker />
          </HederOfPage>
          <DescktopStyle>
            <DayDashboard
              dayStatistics={dayStatistics}
              dayInformation={DayInformation}
            ></DayDashboard>
            <div>
              <OnTheDay
                oneProductTest={oneProductTest}
                exercisesTest={exercisesTest}
              ></OnTheDay>
            </div>
          </DescktopStyle>
        </div>
      </Container>
    </>
  );
};

export default DiaryPage;
