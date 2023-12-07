import { ExerciseNavLink, ExercisesNav } from './ExercisesNavigation.styled';

export const ExercisesNavigation = () => {
  return (
    <ExercisesNav>
      <ExerciseNavLink to="/exercises/bodyPart">Body parts</ExerciseNavLink>
      <ExerciseNavLink to="/exercises/target">Muscles</ExerciseNavLink>
      <ExerciseNavLink to="/exercises/equipment">Equipment</ExerciseNavLink>
    </ExercisesNav>
  );
};
