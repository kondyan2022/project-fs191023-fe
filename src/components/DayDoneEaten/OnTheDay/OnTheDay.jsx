import {DayProductsComponent,Products,Header,BtnAdd,NotFound,Scroll} from './OnTheDay.styled'
import {OneProductMobile} from '../OneDataMobile/OneProductMobile'
import {OneExerciseMobile} from '../OneDataMobile/OneExerciseMobile'
import  {useState,useEffect,useRef } from "react";
import {DesktopVersionProdukt} from '../DesktopVersion/DesktopVersionProdukt'
import {DesktoVersionExercises} from '../DesktopVersion/DesktopVersionExercises'
import sprite from '../../../images/sprite.svg'



 export const OnTheDay = ({oneProductTest, exercisesTest,date})=> {
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


 
  return <>  
  <DayProductsComponent ref={ref}>
    <Header>
    <Products>Products</Products>
    <BtnAdd to="/products">Add product
    <svg>
    <use href={`${sprite}#icon-arrow-right`}></use>
   </svg>
    </BtnAdd>
    </Header>

{oneProductTest.length > 0 ? size.clientWidth > 700? (<DesktopVersionProdukt oneProductTest={oneProductTest} date={date}/>)
:(<Scroll>{( oneProductTest.map(oneProduct =>(<OneProductMobile key={oneProduct._id} {...oneProduct} date={date} />)))}</Scroll>)

  
: <NotFound>Not found products</NotFound>
}

</DayProductsComponent>

<DayProductsComponent ref={ref}>
<Header>
<Products>Exercises</Products>
<BtnAdd to="/exercises">Add exercise
<svg>
<use href={`${sprite}#icon-arrow-right`}></use>
</svg>
</BtnAdd>
</Header>

{exercisesTest.length > 0 ? 
size.clientWidth > 700? (<DesktoVersionExercises exercisesTest={exercisesTest} date={date}/>) :
 (<Scroll>{exercisesTest.map(oneExercise => (<OneExerciseMobile key={oneExercise._id} {...oneExercise} date={date}/>))}</Scroll>)
: <NotFound>Not found exercises</NotFound>
}

</DayProductsComponent>
</>

}
