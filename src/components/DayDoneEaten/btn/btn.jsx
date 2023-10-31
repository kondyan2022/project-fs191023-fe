import { TrashBtn } from "./btn.styled";
import { ReactComponent as IconTrash } from '../../../images/trash.svg';




export const BtnTrash = (props) =>{

    return <TrashBtn onClick={props.handleDeleteProduct||props.handleDeleteExercises}><IconTrash></IconTrash></TrashBtn>
}