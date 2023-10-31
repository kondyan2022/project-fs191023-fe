import Container from '../../components/Container/Container';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';

import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { PageName, DescktopStyle, HederOfPage } from './DiaryPage.styled';
import dayStatistics from '../../../resources/dayStatistics.json';
import oneProductTest from '../../../resources/oneProductTest.json';
import exercisesTest from '../../../resources/exercisesTest.json';
import DayInformation from '../../../resources/DayInformation.json';
import StyledDatepicker from '../../components/Calendar/StyledDatepicker';

const DiaryPage = () => {
  return (
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
  );
};

export default DiaryPage;
