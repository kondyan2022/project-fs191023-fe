import {DayExercisesComponent,Exercises,Header,BtnAdd,NotFound} from './DayExercises.styled'

 export const DayExercises = ()=> {
  return  <DayExercisesComponent>
    <Header>
    <Exercises>Exercises</Exercises>
    <BtnAdd to="/exercises">Add exercise
    <svg>
    <use href="../src/images/sprite.svg#icon-arrow-right"></use>
   </svg>
  </BtnAdd>
    </Header>
    <NotFound>Not found exercises</NotFound> 

  </DayExercisesComponent>

}