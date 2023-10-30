import { ExerciseNavLink, ExercisesNav } from "./ExercisesNavigation.styled";
import exercises from '../../../../resources/exercises.json';

export const ExercisesNavigation = ({ activeBoard, handleBoardClick, exerciseName, setExerciseName }) => {
    
    const updateExerciseName = (newExerciseName) => {
        setExerciseName(newExerciseName);
    };

    const isBodyPartActive = exercises.some(exercise => exercise.bodyPart === exerciseName);
    const isMusclesActive = exercises.some(exercise => exercise.target === exerciseName);
    const isEquipmentActive = exercises.some(exercise => exercise.equipment === exerciseName);

    return (
        <ExercisesNav>
            <ExerciseNavLink
                to="bodyparts"
                className={activeBoard === 'Body parts' || isBodyPartActive ? 'active' : ''}
                onClick={() => { updateExerciseName(''); handleBoardClick('Body parts'); }}
            >
                Body parts
            </ExerciseNavLink>
            <ExerciseNavLink
                to="muscles"
                className={activeBoard === 'Muscles' || isMusclesActive ? 'active' : ''}
                onClick={() => { updateExerciseName(''); handleBoardClick('Muscles'); }}
            >
                Muscles
            </ExerciseNavLink>
            <ExerciseNavLink
                to="equipment"
                className={activeBoard === 'Equipment' || isEquipmentActive ? 'active' : ''}
                onClick={() => { updateExerciseName(''); handleBoardClick('Equipment'); }}
            >
                Equipment
            </ExerciseNavLink>
        </ExercisesNav>
    );
}