
import { ExerciseNavLink, ExercisesNav } from "./ExercisesNavigation.styled"

export const ExercisesNavigation = ({ activeBoard, handleBoardClick }) => {


    return (
        <ExercisesNav>
            <ExerciseNavLink
                to="bodyparts"
                className={activeBoard === 'Body parts' ? 'active' : ''}
                onClick={() => handleBoardClick('Body parts')}>
                Body parts
            </ExerciseNavLink>
             <ExerciseNavLink
                to="muscles"
                className={activeBoard === 'Muscles' ? 'active' : ''}
                onClick={() => handleBoardClick('Muscles')}>
                Muscles
            </ExerciseNavLink>
             <ExerciseNavLink
                to="equipment"
                className={activeBoard === 'Equipment' ? 'active' : ''}
                onClick={() => handleBoardClick('Equipment')}>
                Equipment
            </ExerciseNavLink>
        </ExercisesNav>
        
    )
}