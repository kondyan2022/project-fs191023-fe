import { useEffect } from 'react';
import Container from '../../components/Container/Container';
import ProductsList from '../../components/Products/ProductsList/ProductsList';

import { useGetAllProductsQuery } from '../../redux/features/prodEndpoints';
import { useSelector } from 'react-redux';
import { isLogin } from '../../redux/selectors';

const ProductsPage = () => {
  const isLoadedUser = useSelector(isLogin);

  const { data, isLoading, isFetching, error, isError } =
    useGetAllProductsQuery(isLoadedUser, { skip: !isLoadedUser }); // НЕ потрібно викликати дані асинхронно, працюєте тільки із витягнутими, фіксованими, даними(data, error...)
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

  console.log('DATA: ', data);

  return (
    <Container>
      <div>
        <ProductsList />
        <div>
          <ul>
            {isError && (
              <p>
                {error.status}
                {error.data}
              </p>
            )}
            {data &&
              data.map((product) => (
                <li key={product._id}>
                  <b>Category</b>: {product.category}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default ProductsPage;
