import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";

export const MusclesBoard = ({ handleBoardClick, handleExNameClick }) => {
    const musclesCards = cards.filter(card => card.filter === "Muscles");
    return (
        <>
            <ExBoardList>
                {musclesCards.map(card => (
                    <ExBoardItem
                        key={card._id}>
                        <ExercisesCard
                            exercisesCard={card}
                            handleBoardClick={handleBoardClick}
                            handleExNameClick={handleExNameClick}
                        />
                    </ExBoardItem>
                ))}
            </ExBoardList>
            <Pagination />
        </>
    )
}