
import sprite from '../../../images/sprite.svg';
import { PaginationPage } from './Pagination.styled';



export const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const renderPageNumbers = () => {

    if (totalPages === 1) {
      return null
    }
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <PaginationPage
          key={i}
          className={`page-item ${i === currentPage ? 'active' : ''}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
            {i === currentPage && (
              <svg>
                <use href={`${sprite}#pagination-btn`} />
              </svg>
            )}
          </button>
        </PaginationPage>,
      );
    }

    return pageNumbers;
  };

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};


