import { ExercisesNavItem, ExercisesNavList } from "./ExercisesNavigation.styled"

export const ExercisesNavigation = ({activeBoard, handleBoardClick}) => {
    return (
        <>
            <ExercisesNavList>
                <ExercisesNavItem
                    type='button'
                    className={activeBoard === 'Body parts' ? 'active' : ''}
                    onClick={() => handleBoardClick('Body parts')}>
                    Body parts
                </ExercisesNavItem>
                <ExercisesNavItem
                    type='button'
                    className={activeBoard === 'Muscles' ? 'active' : ''}
                    onClick={() => handleBoardClick('Muscles')}>
                    Muscles
                </ExercisesNavItem>
                <ExercisesNavItem
                    type='button'
                    className={activeBoard === 'Equipment' ? 'active' : ''}
                    onClick={() => handleBoardClick('Equipment')}>
                    Equipment
                </ExercisesNavItem>

            </ExercisesNavList>
        </>
    )
}