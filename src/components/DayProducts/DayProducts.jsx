import {DayProductsComponent,Products,Header,BtnAdd,NotFound} from './DayProducts.styled'
import {ProductEaten} from '../DayDoneEaten/ProductEaten'
import  {useState,useEffect,useRef } from "react";
import {DesktoVersion} from './DesktopVersion/DesktopVersion'




 export const DayProducts = ({oneProductTest})=> {
  const [size, setSize] = useState({});
  const ref = useRef();

const resizeHandler = () => {
const { clientHeight, clientWidth } = ref.current || {};
setSize({ clientHeight, clientWidth });
};
 useEffect(() => {
 window.addEventListener("resize", resizeHandler);
 resizeHandler();
return () => {
window.removeEventListener("resize", resizeHandler);
};
}, []);


 
  return   <DayProductsComponent ref={ref}>
    <Header>
    <Products>Products</Products>
    <BtnAdd to="/products">Add product
    <svg>
    <use href="../src/images/sprite.svg#icon-arrow-right"></use>
   </svg>
    </BtnAdd>
    </Header>

{oneProductTest.length > 0 ? size.clientWidth > 700? (<DesktoVersion oneProductTest={oneProductTest}/>)
: (oneProductTest.map(oneProduct => (<ProductEaten key={oneProduct._id.$oid} {...oneProduct}/>)))
  
: <NotFound>Not found products</NotFound>
}

  </DayProductsComponent>

}
