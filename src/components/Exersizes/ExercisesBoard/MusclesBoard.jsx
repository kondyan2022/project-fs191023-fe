import { ExercisesCard } from "../ExercisesCard/ExercisesCard";
import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";
import { useEffect, useState } from "react";
import { PaginationContainer } from "../Pagination/Pagination.styled";

export const MusclesBoard = ({ handleBoardClick, handleExNameClick }) => {
    const musclesCards = cards.filter(card => card.filter === "Muscles");
    const [currentPage, setCurrentPage] = useState(1);

  handleBoardClick("Muscles")

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
  const currentItems = musclesCards.slice(indexOfFirstItem, indexOfLastItem);
    return (
        <PaginationContainer>
            <ExBoardList>
                {currentItems.map(card => (
                    <ExBoardItem
                        key={card._id.$oid}>
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
                totalItems={musclesCards.length}
                currentPage={currentPage}
                onPageChange={handlePageChange} />
        </PaginationContainer>
    )
}

