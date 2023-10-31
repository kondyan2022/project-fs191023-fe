import Container from '../../components/Container/Container';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';
import image from '../../images/side-gym-desktop-tab-2x.jpg';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { PageName, DescktopStyle, HederOfPage } from './DiaryPage.styled';
import dayStatistics from '../../../resources/dayStatistics.json';
import oneProductTest from '../../../resources/oneProductTest.json';
import exercisesTest from '../../../resources/exercisesTest.json';
import DayInformation from '../../../resources/DayInformation.json';
import StyledDatepicker from '../../components/Calendar/StyledDatepicker';
import { useState } from 'react';
import ExerciseCard from '../../components/Exersize-card/ExerciseCard';
const diary = {
  name: 'Jeka',
  target: 'Strength',
  bodyPart: 'Legs',
  equipment: 'Dumbbells',
  gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0009.gif',
  time: 1,
  date: '2023/10/24',
  id: '64f2458d6f67bc34bae4f7f7',
  burnedCalories: 300,
};
const DiaryPage = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openModal = () => {
    setIsAddModalOpen(true);
  };

  return (
    <>
      <Container onClick={openModal}>
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
      {isAddModalOpen && (
        <ExerciseCard {...diary} setIsAddModalOpen={setIsAddModalOpen} />
      )}
    </>
  );
};

export default DiaryPage;
