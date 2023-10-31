import {ProduktsDesktop,OneData} from "./Desktop.styled"

import {BtnTrash} from '../btn/btn'
import desktopExercises from '../../../../resources/desktopExercises.json'
import {useDeleteDairyExercisesMutation} from "../../../redux/features/userDiaryEndpoints";

export const OneExercisDesktop = (props) => {
const { _id : id, date} = props;

const toDelit = {
    id,
    date
}


const [deleteExercis] = useDeleteDairyExercisesMutation();

const DeleteEx = obj => {
    console.log(obj)
    deleteExercis(obj);
  };

    return     <ProduktsDesktop>
    {desktopExercises.map((style,id) => 
    <OneData key={id} styles={style}>{props[style.key]}</OneData>
    )}
    <BtnTrash onClickEx={() => DeleteEx(toDelit)}/>
   </ProduktsDesktop>
}