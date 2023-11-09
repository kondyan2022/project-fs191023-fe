
import {OrangCard,GreyCard, Number } from './OneStatistic.styled';
import sprite from '../../images/sprite.svg'
export  const OneStatistic = (props) => {

  const {svg,name, isNorm,isTime,value,borderColor,isSport} = props;

  return isNorm?<OrangCard>
  <div><svg><use href={`${sprite}${svg}`}></use></svg><p>{name}</p></div>
  <Number>{isTime? `${value} min`: value}</Number>
  </OrangCard>:
  <GreyCard normDone={borderColor} isSport={isSport}>
  <div><svg><use href={`${sprite}${svg}`}></use></svg><p>{name}</p></div><Number>{isTime? `${value < 0? `+ ${-value}`: value} min`: value}</Number>
  </GreyCard>
}

