import { TrashBtn } from "./btn.styled";
import { ReactComponent as IconTrash } from '../../../images/trash.svg';
// import { useDispatch } from "react-redux";



export const BtnTrash = () =>{

    // const dispatch = useDispatch();
    //const handleDelete = (obj) =>{
        
    //  const {id,isProduct} = obj
    //  dispatch(console.log(id,isProduct))
    //}
    // dispatch(deleteDiaryProducts(id));
    // onClick={handleDelete(id)}
    //onClick={()=>console.log(id)}
    return <TrashBtn ><IconTrash></IconTrash></TrashBtn>
}