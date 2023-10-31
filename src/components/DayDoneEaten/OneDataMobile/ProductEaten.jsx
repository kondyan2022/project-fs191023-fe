import {TitleCategory,OtherData,AllData,NamOfCategory,RecommendDiv,Container } from "./Mobile.styled"
import {Recommend} from '../operations/DayDoneOperations'
import {BtnTrash} from '../btn/btn'
import {Circle} from '../Circle/Circle'

// import { deleteDiaryProducts } from "../../../redux/features/userDiaryEndpoints";


export const ProductEaten = (props) =>{

   

const {title,calories,weight,groupBloodNotAllowed,category, 
    _id:{$oid: id} 
} = props;

const isRecommended = (Recommend(3,groupBloodNotAllowed));
// const toDelit = {
//     id, 
//     isProduct:true,
//     //date:
// }

const toDelete = id => {
    (console.log(id));
  };

 
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
        <div>{calories}</div>
        </span>
        <span>
        <NamOfCategory>Weight</NamOfCategory>
        <div>{weight}</div>
        </span> 
        <span>
        <NamOfCategory>Recommend</NamOfCategory>
        <RecommendDiv>{isRecommended? (<><Circle isRecommended={isRecommended}></Circle>Yes</>) : (<><Circle isRecommended={isRecommended}></Circle>No</>)}</RecommendDiv>
        </span>            
        </OtherData>
        <button onClick={() => toDelete(id)}></button>
       <BtnTrash/>
        </Container>
</AllData>
    </>

}
