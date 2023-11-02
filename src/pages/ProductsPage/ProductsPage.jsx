import Container from '../../components/Container/Container';
import Filter from '../../components/Products/Filter/Filter';
import { Section, Title, Wrap, NotFound } from './ProductsPage.styled';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import { useEffect, useRef, useState } from 'react';
import { useGetProductByFilterQuery } from '../../redux/features/prodEndpoints';
import { useSearchParams } from 'react-router-dom';
import AddProductSuccess from '../../components/BasicModalWindow/AddProductSuccess';
import { handleCurrentUser } from '../../hooks/handleCurrentUser';
import { FallingLines } from 'react-loader-spinner';

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentRecomm, setCurrentRecomm] = useState();
  const [excessCalories, setExcessCalories] = useState(0);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const listRef = useRef();

  const {
    data: filterData,
    isFetching: isFilterFetching,
    error,
    isError,
  } = useGetProductByFilterQuery(
    Object.fromEntries([...searchParams, ['limit', 3000]]),
  );

  const currentUser = handleCurrentUser();
  const blood = currentUser?.data?.profile?.blood;

  useEffect(() => {
    if (searchParams) {
      setPage(1);
    }
  }, [searchParams]);

  const handleScroll = () => {
    const listElement = listRef.current;
    if (listElement) {
      const isAtBottom =
        listElement.scrollTop + listElement.clientHeight >=
        listElement.scrollHeight - 200;
      if (isAtBottom) {
        setPage((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    if (filterData?.results) {
      const listElement = listRef.current;
      if (listElement) {
        listElement.addEventListener('scroll', handleScroll);

        return () => {
          listElement.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [filterData?.results]);

  return (
    <Section>
      <div></div>
      <Container>
        <Wrap>
          <Title>Products</Title>
          <Filter
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory}
            currentRecomm={currentRecomm}
            setCurrentRecomm={setCurrentRecomm}
          />
        </Wrap>
        {isFilterFetching && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100px',
              height: '100px',
            }}
          >
            <FallingLines
              color="#e6533c"
              width="100"
              visible={true}
              ariaLabel="falling-lines-loading"
            />
          </div>
        )}
        {isError && (
          <p>
            {error.status}
            {error.data}
          </p>
        )}
        {!isFilterFetching &&
          (filterData?.results.length !== 0 ? (
            page && (
              <ProductsList
                currenrRef={listRef}
                products={filterData.results.slice(0, page * 20)}
                setExcessCalories={setExcessCalories}
                blood={blood}
                setIsAddedSuccess={setIsAddedSuccess}
              />
            )
          ) : (
            <NotFound>
              <p>
                <span>Sorry, no results were found</span> for the product
                filters you selected. You may want to consider other search
                options to find the product you want. Our range is wide and you
                have the opportunity to find more options that suit your needs.
              </p>
              <span>Try changing the search parameters.</span>
            </NotFound>
          ))}
      </Container>
      {isAddedSuccess && (
        <AddProductSuccess
          excessCalories={excessCalories}
          closeModal={() => {
            setIsAddedSuccess(false);
            setExcessCalories(0);
          }}
        />
      )}
    </Section>
  );
};
export default ProductsPage;
