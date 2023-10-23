import {DayStatisticsComponent,DailyCalorie,DailyNormSport,СaloriesConsumed} from './DayStatistics.styled'
// import dayStatistics from '../../../resources/dayStatistics.json';

export const DayStatistics = ({dayStatistics}) => {
    console.log(dayStatistics)
    return(
        
    <DayStatisticsComponent>
        <DailyCalorie>Daily calorie intake</DailyCalorie> 
        <DailyNormSport>Daily norm of sports</DailyNormSport>
        <СaloriesConsumed>Сalories consumed</СaloriesConsumed>
    </DayStatisticsComponent>
    )
     
}