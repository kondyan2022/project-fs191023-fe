import {ProduktsDesktop,RecommendDesk,OneData} from "./Desktop.styled"
// import {Recommend} from '../operations/DayDoneOperations'
import {BtnTrash} from '../btn/btn'
import { Circle } from "../Circle/Circle"
import desktopDataDayProduckts from '../../../../resources/desktopDataDayProduckts.json'
import { useDeleteDiaryProductsMutation } from "../../../redux/features/userDiaryEndpoints";

export const OneProduktDesktop = (props) => {
   const {recommend, _id : id, date} = props;

   const toDelit = {
      id, 
      date
   }
   
   const [deleteProduct] = useDeleteDiaryProductsMutation()   

    const Delete = obj => {
      console.log(obj)
      deleteProduct(obj);
    };
// const {groupBloodNotAllowed,
//    // _id:{$oid: id}
// } = props;
// const recommend = (Recommend(3,groupBloodNotAllowed));





    return     <ProduktsDesktop>
   
    {desktopDataDayProduckts.map((style,id) => 
       <OneData key={id} styles={style}>{props[style.key]}</OneData>
       )}
    {/* <RecommendDesk>{recommend? (<><Circle isRecommended={recommend}></Circle>Yes</>) : (<><Circle isRecommended={recommend}></Circle>No</>)}</RecommendDesk> */}
         <RecommendDesk>{recommend? (<><Circle isRecommended={recommend}></Circle>Yes</>) : (<><Circle isRecommended={recommend}></Circle>No</>)}</RecommendDesk>
    <BtnTrash onClick={() => Delete(toDelit)} />
   </ProduktsDesktop>
}