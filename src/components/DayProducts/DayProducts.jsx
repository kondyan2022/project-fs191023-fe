import {DayProductsComponent,Products,Header,BtnAdd,NotFound} from './DayProducts.styled'
import {ProductEaten} from '../DayDoneEaten/ProductEaten'


 export const DayProducts = ({oneProductTest})=> {
 
  return   <DayProductsComponent>
    <Header>
    <Products>Products</Products>
    <BtnAdd to="/products">Add product
    <svg>
    <use href="../src/images/sprite.svg#icon-arrow-right"></use>
   </svg>
    </BtnAdd>
    </Header>
    {oneProductTest.length > 0 ?   
  (oneProductTest.map(oneProduct => (<ProductEaten key={oneProduct._id.$oid} {...oneProduct}/>)))
    : (<NotFound>Not found products</NotFound>)}

  </DayProductsComponent>

}

