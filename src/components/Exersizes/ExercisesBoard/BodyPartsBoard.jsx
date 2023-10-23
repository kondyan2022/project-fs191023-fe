import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExercisesCard } from "../ExercisesCard/ExercisesCard"

export const BodyPartsBoard = ({ handleBoardClick, handleExNameClick }) => {
    const bodyPartsCards = cards.filter(card => card.filter === "Body parts");
    return (
        <>
            <ul>
                {bodyPartsCards.map(card => (
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
    
