import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";
import { useEffect, useState } from "react";
import { PaginationContainer } from "../Pagination/Pagination.styled";


export const EquipmentBoard = ({ handleBoardClick, handleExNameClick }) => {
    const equipmentCards = cards.filter(card => card.filter === "Equipment");
  const [currentPage, setCurrentPage] = useState(1);
  

  handleBoardClick("Equipment")

  const determineItemsPerPage = () => {
    const windowWidth = window.innerWidth

    if (windowWidth >= 768 && windowWidth <= 1439) {
      return 9
    } else {
      return 10
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(determineItemsPerPage())
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

  const handlePageChange = newPage => {
    setCurrentPage(newPage)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = equipmentCards.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <PaginationContainer>
            <ExBoardList>
                {currentItems.map(card => (
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
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={equipmentCards.length}
                currentPage={currentPage}
                onPageChange={handlePageChange} />
        </PaginationContainer>
    )
}