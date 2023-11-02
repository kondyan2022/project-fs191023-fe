import {ProduktsDesktop,OneData} from "./OneDataDesktop.styled"
import {BtnTrash} from '../btn/btn'
import desktopExercises from '../../../../resources/desktopExercises.json'
import {useDeleteDairyExercisesMutation} from "../../../redux/features/userDiaryEndpoints";
import {useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const OneExercisDesktop = (props) => {
const { _id :itemid, date} = props;

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

    return     <ProduktsDesktop>
    <Toaster/>
    {desktopExercises.map((style,id) => 
    <OneData key={id} styles={style}>{props[style.key]}</OneData>
    )}
    <BtnTrash handleDeleteExercises={handleDeleteExercises}/>
   </ProduktsDesktop>
}