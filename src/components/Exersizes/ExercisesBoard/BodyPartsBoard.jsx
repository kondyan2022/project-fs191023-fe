import { Pagination } from '../Pagination/Pagination';
// import cards from '../../../../resources/filters.json';
import { ExercisesCard } from '../ExercisesCard/ExercisesCard';
import { ExBoardItem, ExBoardList } from './ExercisesBoards.styled';
import { PaginationContainer } from '../Pagination/Pagination.styled';
import { useEffect, useMemo, useState } from 'react';
import { useGetGroupExercisesQuery } from '../../../redux/features/exerciseEndpoints';
import Backdrop from '../../Backdrop/Backdrop';
import { RotatingLines } from 'react-loader-spinner';

const determineItemsPerPage = () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768 && windowWidth <= 1439) {
    return 9;
  } else {
    return 10;
  }
};

export const BodyPartsBoard = ({ handleBoardClick, handleExNameClick }) => {
  const {
    data: cards,
    isFetching,
    // error,
    // isError,
  } = useGetGroupExercisesQuery();

  const bodyPartsCards = useMemo(
    () => (cards ? cards.filter((card) => card.filter === 'Body parts') : []),
    [cards],
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(determineItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(determineItemsPerPage());
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bodyPartsCards.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <PaginationContainer>
      <ExBoardList>
        {currentItems.map((card) => (
          <ExBoardItem key={card._id}>
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
        onPageChange={handlePageChange}
      />
      {isFetching && (
        <Backdrop closeOnClick={false} closeOnEscape={false}>
          <RotatingLines
            strokeColor="#e6533c"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Backdrop>
      )}
    </PaginationContainer>
  );
};
