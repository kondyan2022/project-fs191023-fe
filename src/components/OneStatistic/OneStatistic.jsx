
import {OrangCard,GreyCard} from './OneStatistic.styled';


export  const OneStatistic = ({svg,name, isNorm }) => {
    console.log(svg,name, isNorm)

    return isNorm?<OrangCard><div><svg>
    <use href={svg}></use>
  </svg><p>{name}</p></div></OrangCard>:
  <GreyCard><div><svg>
  <use href={svg}></use>
</svg><p>{name}</p></div></GreyCard>
}

