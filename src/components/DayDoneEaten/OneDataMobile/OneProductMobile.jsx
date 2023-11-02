import {TitleCategory,OtherData,AllData,NamOfCategory,RecommendDiv,Container } from "./OneDataMobile.styled"
import {BtnTrash} from '../btn/btn'
import {Circle} from '../Circle/Circle'
import {useEffect} from 'react'
import { useDeleteDiaryProductsMutation } from "../../../redux/features/userDiaryEndpoints";
import toast, { Toaster } from 'react-hot-toast';
// { "product":"5d51694902b2373622ff578e",
// "date":"01/11/2023",
// "amount":"100",
// "calories":"150"
// }

export const OneProductMobile = (props) =>{
const {title,consumeCalories,weight,recommended,category, _id: itemid, date} = props;

const toDelit = {
    itemid, 
    date
}

const [deleteProduct,{isSuccess,isError}] = useDeleteDiaryProductsMutation()
const handleDeleteProduct = async () => {await deleteProduct(toDelit);}

   useEffect(() => {
    if(isSuccess){
        console.log("Product has been deleted")
        
    }
    if(isError){
        toast.error(`Product cannot delete!`)
    }
   },[deleteProduct,isSuccess,isError])



 return <>

<AllData>
        <Toaster />
        <TitleCategory>
        <NamOfCategory>Title</NamOfCategory>
        <div>{title}</div>
        </TitleCategory>
        <TitleCategory>
        <NamOfCategory>Category</NamOfCategory>
        <div>{category}</div>
        </TitleCategory>
        
        <Container>
        <OtherData>
        <span>
        <NamOfCategory>Calories</NamOfCategory>
        <div>{consumeCalories}</div>
        </span>
        <span>
        <NamOfCategory>Weight</NamOfCategory>
        <div>{weight}</div>
        </span> 
        <span>
        <NamOfCategory>Recommend</NamOfCategory>
        <RecommendDiv>{recommended? (<><Circle isRecommended={recommended}></Circle>Yes</>) : (<><Circle isRecommended={recommended}></Circle>No</>)}</RecommendDiv>
        </span>            
        </OtherData>
       <BtnTrash handleDeleteProduct={handleDeleteProduct}  />
       </Container>
</AllData>
    </>

}
