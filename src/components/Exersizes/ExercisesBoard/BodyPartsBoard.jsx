import { Pagination } from "../Pagination/Pagination"
import cards from '../../../../resources/filters.json'
import { ExercisesCard } from "../ExercisesCard/ExercisesCard"
import { ExBoardItem, ExBoardList } from "./ExercisesBoards.styled";
import { PaginationContainer } from "../Pagination/Pagination.styled";
import { useEffect, useState } from "react";

export const BodyPartsBoard = ({ handleBoardClick, handleExNameClick }) => {
    const bodyPartsCards = cards.filter(card => card.filter === "Body parts");
    const [currentPage, setCurrentPage] = useState(1);
    

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
  const currentItems = bodyPartsCards.slice(indexOfFirstItem, indexOfLastItem);
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
                totalItems={bodyPartsCards.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}/>
        </PaginationContainer>
    )
}
    

    
