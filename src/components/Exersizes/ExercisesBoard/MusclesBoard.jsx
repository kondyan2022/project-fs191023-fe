import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'

export const MusclesBoard = ({ handleBoardClick, handleExNameClick }) => {
    const musclesCards = cards.filter(card => card.filter === "Muscles");
    return (
        <>
            <ul>
                {musclesCards.map(card => (
                    <li
                        key={card._id}>
                        <ExercisesCard
                            exercisesCard={card}
                            handleBoardClick={handleBoardClick}
                            handleExNameClick={handleExNameClick}
                        />
                    </li>
                ))}
            </ul>
            <Pagination />
        </>
    )
}