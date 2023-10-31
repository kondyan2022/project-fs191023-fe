import {TitleCategory,OtherData,AllData,NamOfCategory,Container,DivLeater } from "./Mobile.styled"
import {BtnTrash} from '../btn/btn'
import {useDelteDairyExercisesMutation} from "../../../redux/features/userDiaryEndpoints";


export const ExercisesDone = (props) =>{
const {bodyPart,equipment,name,target,burnedCalories,time,
    _id: id, date} = props;

const toDelit = {
    id, 
    date
}

const [deleteExercis] = useDelteDairyExercisesMutation();

const DeleteEx = obj => {
    console.log(obj)
    deleteExercis(obj);
  };


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
        <BtnTrash onClickEx={() => DeleteEx(toDelit)}/>
        </Container>
</AllData>
    </>

}