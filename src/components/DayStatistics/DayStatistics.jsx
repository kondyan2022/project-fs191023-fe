import {DayStatisticsComponent,Masseg,DescktopStyle} from './DayStatistics.styled'
import {OneStatistic} from '../OneStatistic/OneStatistic'


export const DayStatistics = ({dayStatistics}) => {
    
    return(
     <> 
  <DescktopStyle>
    <DayStatisticsComponent>
        {dayStatistics.map(oneStat => (<OneStatistic key={oneStat.id} {...oneStat}/>))}
    </DayStatisticsComponent>
    <Masseg><svg width="24" height="24">
    <use href="../src/images/sprite.svg#icon"></use>
  </svg><p>Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices.</p></Masseg>
  </DescktopStyle>
    </>  
    )
     
}