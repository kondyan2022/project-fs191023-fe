import {TitleCategory,OtherData,AllData,NamOfCategory,Container,DivLeater } from "./Mobile.styled"
import {BtnTrash} from '../btn/btn'
import {useDeleteDairyExercisesMutation} from "../../../redux/features/userDiaryEndpoints";
import { useDispatch } from "react-redux";

export const ExercisesDone = (props) =>{
const {bodyPart,equipment,name,target,burnedCalories,time,
    _id: id, date} = props;
const dispatch = useDispatch();
const toDelit = {
    id, 
    date
}
const [deleteExercis] = useDeleteDairyExercisesMutation();
const handleDeleteExercises = () => dispatch(deleteExercis(toDelit));
// const DeleteEx = obj => {
//     console.log(obj)
//     deleteExercis(obj);
//   };


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
        <BtnTrash handleDeleteExercises={handleDeleteExercises}/>
        </Container>
</AllData>
    </>

}