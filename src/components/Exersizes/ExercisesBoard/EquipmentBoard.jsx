import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'


export const EquipmentBoard = ({ handleBoardClick, handleExNameClick }) => {
    const equipmentCards = cards.filter(card => card.filter === "Equipment");
    return (
        <>
            <ul>
                {equipmentCards.map(card => (
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