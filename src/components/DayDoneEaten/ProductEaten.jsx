import {TitleCategory,OtherData,AllData,NamOfCategory,RecommendDiv,Circle,Container} from "./ProductEaten.styled"
import {Recommend} from './DayDoneOperations'
import { ReactComponent as IconTrash } from '../../images/trash.svg';


export const ProductEaten = (props) =>{

const {title,calories,weight,groupBloodNotAllowed,category} = props;
const isRecommended = (Recommend(3,groupBloodNotAllowed));
  
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
        <button><IconTrash></IconTrash></button>
        </Container>
         
    </AllData>
    </>

}