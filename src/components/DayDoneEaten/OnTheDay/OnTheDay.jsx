import {DayProductsComponent,Products,Header,BtnAdd,NotFound,Scroll} from './OnTheDay.styled'
import {ProductEaten} from '../OneDataMobile/ProductEaten'
import {ExercisesDone} from '../OneDataMobile/ExercisesDone'
import  {useState,useEffect,useRef } from "react";
import {DesktopVersionProdukt} from '../DesktopVersion/DesktopVersionProdukt'
import {DesktoVersionExercises} from '../DesktopVersion/DesktopVersionExercises'




 export const OnTheDay = ({oneProductTest, exercisesTest})=> {
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
    <use href="../src/images/sprite.svg#icon-arrow-right"></use>
   </svg>
    </BtnAdd>
    </Header>

{oneProductTest.length > 0 ? size.clientWidth > 700? (<DesktopVersionProdukt oneProductTest={oneProductTest}/>)
: (<Scroll> {oneProductTest.map(oneProduct => (<ProductEaten key={oneProduct._id.$oid} {...oneProduct}/>))}</Scroll>)
  
: <NotFound>Not found products</NotFound>
}

</DayProductsComponent>

<DayProductsComponent ref={ref}>
<Header>
<Products>Exercises</Products>
<BtnAdd to="/exercises">Add exercise
<svg>
<use href="../src/images/sprite.svg#icon-arrow-right"></use>
</svg>
</BtnAdd>
</Header>

{exercisesTest.length > 0 ? 
size.clientWidth > 700? (<DesktoVersionExercises exercisesTest={exercisesTest}/>) :
(<Scroll> {exercisesTest.map(oneExercise => (<ExercisesDone key={oneExercise._id.$oid} {...oneExercise}/>))}</Scroll>)
: <NotFound>Not found exercises</NotFound>
}

</DayProductsComponent>
</>

}
