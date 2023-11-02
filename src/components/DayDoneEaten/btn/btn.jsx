import { TrashBtn } from "./btn.styled";
import { ReactComponent as IconTrash } from '../../../images/trash.svg';




export const BtnTrash = ({handleDeleteProduct,handleDeleteExercises}) =>{
   
    return <TrashBtn onClick={handleDeleteExercises||handleDeleteProduct}><IconTrash></IconTrash></TrashBtn>
}