import {ProduktsDesktop,OneData} from "./Desktop.styled"

import {BtnTrash} from '../btn/btn'
import desktopExercises from '../../../../resources/desktopExercises.json'


export const OneExercisDesktop = (props) => {
   




    return     <ProduktsDesktop>
    {desktopExercises.map((style,id) => 
    <OneData key={id} styles={style}>{props[style.key]}</OneData>
    )}
    <BtnTrash/>
   </ProduktsDesktop>
}