import {DayStatisticsComponent,Masseg,DescktopStyle,Container} from './DayDashboard.styled';
import {OneStatistic} from '../OneStatistic/OneStatistic';
import {colorFnc} from './operation'



export const DayDashboard = ({dayStatistics, dayInformation}) => {
const { leftCalories,leftExercisesTime} = dayInformation;

const isSport = true;

const borderColor = {
  "calory":colorFnc(false,leftCalories),
  "sport": colorFnc(true,leftExercisesTime),
}

const caloryes = dayStatistics.slice(0, 3);
const sport = dayStatistics.slice(3, 6);






    return(
     <> 
  <DescktopStyle>
  <Container>
    <DayStatisticsComponent >
{caloryes.map(oneStat => (<OneStatistic key={oneStat.id} value={dayInformation[oneStat.onTheDay]} {...oneStat} borderColor={borderColor}></OneStatistic>))}
</DayStatisticsComponent>
<DayStatisticsComponent >
{sport.map(oneStat => (<OneStatistic key={oneStat.id} value={dayInformation[oneStat.onTheDay]} {...oneStat} borderColor={borderColor} isSport={isSport}></OneStatistic>))}
</DayStatisticsComponent>
</Container>
    <Masseg><svg width="24" height="24">
    <use href="../src/images/sprite.svg#icon"></use>
  </svg><p>Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices.</p></Masseg>
  </DescktopStyle>
    </>  
    )
     
}