import { useState } from "react"
import { BodyPartsBoard } from "../ExercisesBoard/BodyPartsBoard"
import { EquipmentBoard } from "../ExercisesBoard/EquipmentBoard"
import { MusclesBoard } from "../ExercisesBoard/MusclesBoard"
import { ExercisesNavigation } from "../ExercisesNavigation/ExercisesNavigation"
import { ExercisesBox, ExercisesPageWrap, ExercisesTitle } from "./ExercisesWrap.styled"


export const ExersizeWrap = () => {
    const [activeBoard, setActiveBoard] = useState('Body parts');
    const [exerciseName, setExerciseName] = useState('');

    const handleBoardClick = filter => {
        setActiveBoard(filter)
    }

    const handleExNameClick = name => {
        setExerciseName(name)
    }



    return (
        <ExercisesPageWrap>
            <ExercisesBox>
                {exerciseName ? <ExercisesTitle>{exerciseName}</ExercisesTitle> : <ExercisesTitle>Exercises</ExercisesTitle>}
                <ExercisesNavigation
                    activeBoard={activeBoard}
                    handleBoardClick={handleBoardClick}
                />
            </ExercisesBox>
            
            {activeBoard === 'Body parts' && (
                <BodyPartsBoard
                    handleBoardClick={handleBoardClick}
                    handleExNameClick={handleExNameClick}
                />
            )}

            {activeBoard === 'Muscles' && (
                <MusclesBoard
                    handleBoardClick={handleBoardClick}
                    handleExNameClick={handleExNameClick}
                />
            )}

            {activeBoard === 'Equipment' && (
                <EquipmentBoard
                    handleBoardClick={handleBoardClick}
                    handleExNameClick={handleExNameClick}
                />
            )}
        </ExercisesPageWrap>
    )
}