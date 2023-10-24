import {DayProductsComponent,Products,Header,BtnAdd,NotFound} from './DayProducts.styled'

 export const DayProducts = ()=> {
  return  <DayProductsComponent>
    <Header>
    <Products>Products</Products>
    <BtnAdd to="/products">Add product
    <svg>
    <use href="../src/images/sprite.svg#icon-arrow"></use>
   </svg>
    </BtnAdd>
    </Header>
    <NotFound>Not found products</NotFound> 

  </DayProductsComponent>

}

