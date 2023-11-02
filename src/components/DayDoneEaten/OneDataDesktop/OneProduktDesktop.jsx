import {ProduktsDesktop,RecommendDesk,OneData} from "./OneDataDesktop.styled"
import {BtnTrash} from '../btn/btn'
import { Circle } from "../Circle/Circle"
import desktopDataDayProduckts from '../../../../resources/desktopDataDayProduckts.json'
import { useDeleteDiaryProductsMutation } from "../../../redux/features/userDiaryEndpoints";
import {useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const OneProduktDesktop = (props) => {
const {recommend, _id : itemid, date} = props
const toDelit = {
      itemid, 
      date
   }


const [deleteProduct,{isSuccess,isError}] = useDeleteDiaryProductsMutation()
const handleDeleteProduct = async () => {await deleteProduct(toDelit)}
   
useEffect(() => {
       if(isSuccess){
           console.log("Product has been deleted")
       }
       if(isError){
        toast.error(`Product cannot delete!`)
       }
      },[deleteProduct,isSuccess,isError])






    return     <ProduktsDesktop>
   <Toaster />
    {desktopDataDayProduckts.map((style,id) => 
       <OneData key={id} styles={style}>{props[style.key]}</OneData>
       )}
<RecommendDesk>{recommend? (<><Circle isRecommended={recommend}></Circle>Yes</>) : (<><Circle isRecommended={recommend}></Circle>No</>)}</RecommendDesk>
    <BtnTrash handleDeleteProduct={handleDeleteProduct} />
   </ProduktsDesktop>
}

