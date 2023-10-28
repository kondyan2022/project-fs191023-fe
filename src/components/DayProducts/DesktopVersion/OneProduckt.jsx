import {ProduktsDesktop,TiTleDesk,CategoryDesk,CaloryDesk,WeightDesk,RecommendDesk} from "./OneProduckt.styled"
import {Recommend} from '../../DayDoneEaten/DayDoneOperations'
import {BtnTrash} from '../btn/btn'
import { Circle } from "../Circle/Circle"

export const OneProduktDesktop = (props) => {
    
const {title,calories,weight,groupBloodNotAllowed,category} = props;
const isRecommended = (Recommend(3,groupBloodNotAllowed));


    return     <ProduktsDesktop>
    <TiTleDesk>{title}</TiTleDesk>
    <CategoryDesk>{category}</CategoryDesk>
    <CaloryDesk>{calories}</CaloryDesk>
    <WeightDesk>{weight}</WeightDesk>
    <RecommendDesk>{isRecommended? (<><Circle isRecommended={isRecommended}></Circle>Yes</>) : (<><Circle isRecommended={isRecommended}></Circle>No</>)}</RecommendDesk>
    <BtnTrash/>
   </ProduktsDesktop>
}