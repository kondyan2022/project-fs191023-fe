import Container from '../../components/Container/Container';
import { OnTheDay } from '../../components/DayDoneEaten/OnTheDay/OnTheDay';

import { useGetDiaryQuery } from '../../redux/features/userDiaryEndpoints';
import { DayDashboard } from '../../components/DayDashboard/DayDashboard';
import { PageName, DescktopStyle, HederOfPage } from './DiaryPage.styled';
import { useEffect,useState } from 'react';
import dayStatistics from '../../../resources/dayStatistics.json';

import StyledDatepicker from '../../components/Calendar/StyledDatepicker';


const DiaryPage = () => {
  const [date, setData] = useState(new Date());
  
  // const currentDate = new Date();

  // const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  // const day = String(currentDate.getDate()).padStart(2, '0');
  // const year = currentDate.getFullYear();
  // const date = `${year}${month}${day}`;

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const dateForFunction = `${year}${month}${day}`;

  console.log(dateForFunction)

  const {data} = useGetDiaryQuery(dateForFunction, {skip: !date, refetchOnMountOrArgChange:true});
 
  useEffect(()=>{
  if(!data){return}
  console.log(data)
 },[data])

//  console.log(useGetDiaryQuery(20231031))

//  const {data} = useGetDiaryQuery(date, {skip: !date, refetchOnMountOrArgChange:true});
//  useEffect(()=>{
//   if(!data){return}
//   console.log(data)
//  },[data])


//  const PreviousDate = (newData) => {
  
//   const month = String(newData.getMonth() + 1).padStart(2, '0');
//   const day = String(newData.getDate()).padStart(2, '0');
//   const year = newData.getFullYear();
//   const dateNaw = `${year}${month}${day}`
//   return dateNaw
// }


 
//  useEffect(function Update (){
//  const otherDate = PreviousDate()
//   console.log(useGetDiaryQuery(otherDate))
//   },[PreviousDate])
 


  

  return (
    <Container>
      <div>
        <HederOfPage>
          <PageName>Diary</PageName>

          <StyledDatepicker 
          // setFormData={new Date(currentDate)}
          //           getData={(date) => {
          //             PreviousDate(date)
          setFormData={new Date(date)}
          getData={(date) => setData(date)} />

        </HederOfPage>
        <DescktopStyle>
          {data && (
            <>
              <DayDashboard
                dayStatistics={dayStatistics}
                dayInformation={data}
                // dayInformation={DayInformation}
              ></DayDashboard>
              <div>
                <OnTheDay
                  // oneProductTest={oneProductTest}
                  // exercisesTest={exercisesTest}
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
