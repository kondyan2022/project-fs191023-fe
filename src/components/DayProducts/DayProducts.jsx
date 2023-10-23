import {DayProductsComponent,Products,Header,BtnAdd,NotFound} from './DayProducts.styled'

 export const DayProducts = ()=> {
  return  <DayProductsComponent>
    <Header>
    <Products>Products</Products>
    <BtnAdd to="/products">Add product</BtnAdd>
    </Header>
    <NotFound>Not found products</NotFound> 

  </DayProductsComponent>

}

