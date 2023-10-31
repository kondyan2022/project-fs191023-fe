import {ProduktsDesktop,RecommendDesk,OneData} from "./Desktop.styled"
import {Recommend} from '../operations/DayDoneOperations'
import {BtnTrash} from '../btn/btn'
import { Circle } from "../Circle/Circle"
import desktopDataDayProduckts from '../../../../resources/desktopDataDayProduckts.json'


export const OneProduktDesktop = (props) => {
   // const {recommend} = props;
const {groupBloodNotAllowed,
   // _id:{$oid: id}
} = props;
const isRecommended = (Recommend(3,groupBloodNotAllowed));

// const toDelit = {
//    id, 
//    isProduct:true,
//    //date:
// }


    return     <ProduktsDesktop>
   
    {desktopDataDayProduckts.map((style,id) => 
       <OneData key={id} styles={style}>{props[style.key]}</OneData>
       )}
    {/* <RecommendDesk>{recommend? (<><Circle isRecommended={recommend}></Circle>Yes</>) : (<><Circle isRecommended={recommend}></Circle>No</>)}</RecommendDesk> */}
         <RecommendDesk>{isRecommended? (<><Circle isRecommended={isRecommended}></Circle>Yes</>) : (<><Circle isRecommended={isRecommended}></Circle>No</>)}</RecommendDesk>
    <BtnTrash  />
   </ProduktsDesktop>
}