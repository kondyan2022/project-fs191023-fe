
import {OrangCard,GreyCard, Number } from './OneStatistic.styled';

export  const OneStatistic = (props) => {

  const {svg,name, isNorm,isTime,value,borderColor} = props;


  return isNorm?<OrangCard>
  <div><svg><use href={svg}></use></svg><p>{name}</p></div>
  <Number>{isTime? `${value} min`: value}</Number>
  </OrangCard>:
  <GreyCard normDone={borderColor}>
  <div><svg><use href={svg}></use></svg><p>{name}</p></div><Number>{isTime? `${value < 0? `+ ${-value}`: value} min`: value}</Number>
  </GreyCard>
}

