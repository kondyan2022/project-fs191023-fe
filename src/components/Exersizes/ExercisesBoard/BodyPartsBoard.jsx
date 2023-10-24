import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExercisesCard } from "../ExercisesCard/ExercisesCard"
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";

export const BodyPartsBoard = ({ handleBoardClick, handleExNameClick }) => {
    const bodyPartsCards = cards.filter(card => card.filter === "Body parts");
    return (
        <>
            <ExBoardList>
                {bodyPartsCards.map(card => (
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
    
