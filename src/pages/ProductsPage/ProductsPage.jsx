import Container from '../../components/Container/Container';
import Filter from '../../components/Products/Filter/Filter';
import { Section, Title, Wrap, NotFound } from './ProductsPage.styled';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
import { useState } from 'react';
import { useGetProductByFilterQuery } from '../../redux/features/prodEndpoints';
import { useGetCurrentUserQuery } from '../../redux/features/authEndpoints';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import AddProductSuccess from '../../components/BasicModalWindow/AddProductSuccess';
import BasicModalWindow from '../../components/BasicModalWindow/BasicModalWindow';
const ProductsPage = () => {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentRecomm, setCurrentRecomm] = useState();
  const [excessCalories, setExcessCalories] = useState(0);
  const [isAddedSuccess, setIsAddedSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: filterData,
    isFetching: isFilterFetching,
    error,
    isError,
  } = useGetProductByFilterQuery(
    Object.fromEntries([...searchParams, ['limit', 3000]]),
  );
  console.log([...searchParams]);
  const currentUser = useGetCurrentUserQuery();
  const blood = currentUser?.data?.profile?.blood;

  // console.log(data)
  // НЕ потрібно викликати дані асинхронно, працюєте тільки із витягнутими, фіксованими, даними(data, error...)
  // для спрацьовування хука по умові ви в хук першим параметном передаєте що відсліжувати а другим параметром об'єкт з ключами
  // один з ключів це "skip" йому передаєте анонімну функцію обробщика або якусь перемінну. наприклад результат сулуктора токена
  // Приклад:
  //                             const { data, isLoading, isFetching, error, isError } =
  //                               useGetAllProductsQuery(isLoadedUser, { skip: !isLoadedUser });
  //
  // ВАЖЛИВО! USEnameMUTATION ВІДПРАЦЬОВУЮТЬ ПЕРЕД USEnameQUERY
  //
  // Перевірку додаткову на токен в шапкі чи передавати вручну токен на бекенд не потрібно,
  // токен пишеться в раз в стейт при логіні або при реєстрації а далі логіка вже прописана його підставлення в хедер,
  // просто берете дані які треба і не використовуєте токен, бо він вже в шапці запиту
  //
  // Параметри квері:
  //  data - дані які повертаються при успішному запиті
  //  isFetcing - вказує що запит завантажується, використовуємо для лоадера, повертає 'true' якщо йде запит до сервера та 'false' - коли запит закінчився
  //  isLoading - вказує що запит завантажується в перший раз, та в кеш ще нічого не записано, працює тільки при першому запиті і все
  //  isError - якщо була помилка запиту, повертає true або нічого, бо при false значить успішний запит і поверне 'isSuccess' = true
  // isSuccess - якщо запит успішний = true
  // Всі дані при першому запиту зберігаються у кеш, тому наступні запити вже не йдуть до бекенду а йдуть в кеш, якщо дані не змінювались
  // console.log('DATA: ', data);

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
          <Loading
            styles={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '40px',
              height: '40px',
            }}
          />
        )}
        {isError && (
          <p>
            {error.status}
            {error.data}
          </p>
        )}
        {!isFilterFetching &&
          (filterData?.results.length !== 0 ? (
            <ProductsList
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
            setIsAddedSuccess(false);
            setExcessCalories(0);
          }}
        />
      )}
    </Section>
  );
};
export default ProductsPage;
