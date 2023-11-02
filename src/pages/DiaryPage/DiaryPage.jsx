import Container from '../../components/Container/Container';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';
import {handleCurrentUser} from '../../hooks/handleCurrentUser'
import { useGetDiaryQuery } from '../../redux/features/userDiaryEndpoints';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { PageName, DescktopStyle, HederOfPage } from './DiaryPage.styled';
import { useEffect,useState } from 'react';
import dayStatistics from '../../../resources/dayStatistics.json';

import StyledDatepicker from '../../components/Calendar/StyledDatepicker';


const DiaryPage = () => {
  const [date, setData] = useState(new Date());
  

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const dateForFunction = `${year}${month}${day}`;

 
  const currentUser  = handleCurrentUser()
  const dateOfCreated = currentUser?.data?.createdAt;
  const {data} = useGetDiaryQuery(dateForFunction, {skip: !date, refetchOnMountOrArgChange:true});
  

  
  useEffect(()=>{
  if(!data){return}
 
 },[data])



const createdAtDiary = new Date(dateOfCreated);

createdAtDiary.setDate(createdAtDiary.getDate() - 1);
console.log(createdAtDiary)



  return (
    <Container>
      <div>
        <HederOfPage>
          <PageName>Diary</PageName>

         {dateOfCreated&&(<StyledDatepicker 
          minDate={createdAtDiary}
          setFormData={new Date(date)}
          getData={(date) => setData(date)}/>)
          }

        </HederOfPage>
        <DescktopStyle>
          {data && (
            <>
              <DayDashboard
                dayStatistics={dayStatistics}
                dayInformation={data}
              ></DayDashboard>
              <div>
                <OnTheDay
                  date={data.date}
                  oneProductTest={data.products}
                  exercisesTest={data.exercises}
                ></OnTheDay>
              </div>
            </>
          )}
        </DescktopStyle>
      </div>
    </Container>
  );
};

export default DiaryPage;
