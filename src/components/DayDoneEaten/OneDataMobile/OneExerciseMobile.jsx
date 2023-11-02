import {TitleCategory,OtherData,AllData,NamOfCategory,Container,DivLeater,NamOfCategoryBurned } from "./OneDataMobile.styled"
import {BtnTrash} from '../btn/btn'
import {useDeleteDairyExercisesMutation} from "../../../redux/features/userDiaryEndpoints";
import {useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';

// {"exercise": "64f2458d6f67bc34bae4f8f2",
//     "date": "01/11/2023",
//     "time":"100",
//     "calories":"100"
// }

export const OneExerciseMobile = (props) =>{
const {bodyPart,equipment,name,target,burnedCalories,time,
    _id:itemid, date} = props;

    const toDelit = {
    itemid, 
    date
}

const [deleteExercis,{isSuccess,isError}] = useDeleteDairyExercisesMutation()

const handleDeleteExercises = async () => {
   await deleteExercis(toDelit);}

   useEffect(() => {
    if(isSuccess){
        console.log("Exercis has been deleted")
    }
    if(isError){
        toast.error(`Exercis cannot delete!`)
    }
   },[deleteExercis,isSuccess,isError])





return <>

    <AllData>
    <Toaster/>
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
        <NamOfCategoryBurned>Burned Calories</NamOfCategoryBurned>
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