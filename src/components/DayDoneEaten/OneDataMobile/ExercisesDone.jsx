import {TitleCategory,OtherData,AllData,NamOfCategory,Container,DivLeater } from "./Mobile.styled"
import {BtnTrash} from '../btn/btn'



export const ExercisesDone = (props) =>{


const {bodyPart,equipment,name,target,burnedCalories,time} = props;

return <>

    <AllData>
        
    <TitleCategory>
        <NamOfCategory>Body Part</NamOfCategory>
        <div>{bodyPart}</div>
        </TitleCategory>
        <TitleCategory>
        <NamOfCategory>Equipment</NamOfCategory>
        <div>{equipment}</div>
        </TitleCategory>
        <TitleCategory>
        <NamOfCategory>Name</NamOfCategory>
        <div>{name}</div>
        </TitleCategory>
        
        
        <Container>
        <OtherData>
        <span>
        <NamOfCategory>Target</NamOfCategory>
        <DivLeater>{target}</DivLeater>
        </span>
        <span>
        <NamOfCategory>Burned Calories</NamOfCategory>
        <div>{burnedCalories}</div>
        </span> 
        <span>
        <NamOfCategory>Time</NamOfCategory>
        <div>{time}</div>
        </span>            
        </OtherData>
        <BtnTrash/>
        </Container>
</AllData>
    </>

}