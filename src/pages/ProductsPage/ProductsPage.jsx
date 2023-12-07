import Container from '../../components/Container/Container';
import Filter from '../../components/Products/Filter/Filter';
import { Section, Title, Wrap, NotFound } from './ProductsPage.styled';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import { useEffect, useState } from 'react';
import { useGetProductByFilterQuery } from '../../redux/features/prodEndpoints';
import { useSearchParams } from 'react-router-dom';
import AddProductSuccess from '../../components/BasicModalWindow/AddProductSuccess';
import { handleCurrentUser } from '../../hooks/handleCurrentUser';
import { RotatingLines } from 'react-loader-spinner';
import Backdrop from '../../components/Backdrop/Backdrop';
import { useInView } from 'react-intersection-observer';

const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentRecomm, setCurrentRecomm] = useState();
  const [excessCalories, setExcessCalories] = useState(0);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState({
    ...Object.fromEntries([...searchParams]),
    limit: 20,
    page: 0,
  });

  const {
    data: filterData,
    isFetching: isFilterFetching,
    isLoading,
    error,
    isError,
  } = useGetProductByFilterQuery(queryParams);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  const currentUser = handleCurrentUser();
  const blood = currentUser?.data?.profile?.blood;

  useEffect(() => {
    setQueryParams({
      ...Object.fromEntries([...searchParams]),
      limit: 20,
      page: 0,
    });
  }, [searchParams]);

  useEffect(() => {
    if (isAddedSuccess) {
      document.body.style.overflow = 'hidden';
    }
  }, [isAddedSuccess]);

  useEffect(() => {
    if (inView) {
      // console.log({ page: filterData?.totalPage });
      setQueryParams((prev) => ({
        ...prev,
        page:
          filterData.totalPage - 1 === prev.page ? prev.page : prev.page + 1,
      }));
    }
  }, [filterData?.totalPage, inView, ref]);

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
        {isError && (
          <p>
            {error.status}
            {error.data}
          </p>
        )}
        {!isLoading &&
          (filterData?.results.length !== 0 ? (
            <ProductsList
              ref={ref}
              products={filterData.results}
              setExcessCalories={setExcessCalories}
              blood={blood}
              setIsAddedSuccess={setIsAddedSuccess}
            />
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
            document.body.style.overflow = 'auto';
            setIsAddedSuccess(false);
            setExcessCalories(0);
          }}
        />
      )}
    </Section>
  );
};
export default ProductsPage;
