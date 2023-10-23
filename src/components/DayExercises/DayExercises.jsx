import {DayExercisesComponent,Exercises,Header,BtnAdd,NotFound} from './DayExercises.styled'

 export const DayExercises = ()=> {
  return  <DayExercisesComponent>
    <Header>
    <Exercises>Exercises</Exercises>
    <BtnAdd to="/exercises">Add exercise</BtnAdd>
    </Header>
    <NotFound>Not found exercises</NotFound> 

  </DayExercisesComponent>

}