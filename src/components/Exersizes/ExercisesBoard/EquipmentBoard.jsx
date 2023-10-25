import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";


export const EquipmentBoard = ({ handleBoardClick, handleExNameClick }) => {
    const equipmentCards = cards.filter(card => card.filter === "Equipment");
    return (
        <>
            <ExBoardList>
                {equipmentCards.map(card => (
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