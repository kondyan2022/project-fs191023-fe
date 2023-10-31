import {TitleCategory,OtherData,AllData,NamOfCategory,RecommendDiv,Container } from "./Mobile.styled"

import {BtnTrash} from '../btn/btn'
import {Circle} from '../Circle/Circle'
import { useDispatch } from "react-redux";

import { useDeleteDiaryProductsMutation } from "../../../redux/features/userDiaryEndpoints";


export const ProductEaten = (props) =>{
const {title,consumeCalories,weight,recommended,category, _id: id, date} = props;
const dispatch = useDispatch();
const toDelit = {
    id, 
    date
}

const [deleteProduct] = useDeleteDiaryProductsMutation()
const handleDeleteProduct = () => dispatch(deleteProduct(toDelit));

 return <>

    <AllData>
        
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
        {/* <button onClick={{handleDeleteProduct}}></button> */}
       <BtnTrash handleDeleteProduct={handleDeleteProduct}  />
   
     
        </Container>
</AllData>
    </>

}
