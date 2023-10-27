// import axios from 'axios';
// import { useEffect, useState } from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
// import products from '../../../../resources/products.json';
import { Card, List } from './ProductsList.styled';
import { useGetAllProductsQuery } from '../../../redux/features/prodEndpoints';
const ProductsList = () => {
  // const [page, setPage] = useState(1);

  // const getAllProducts = async (skip = 0) => {
  //   const res = await axios.get(
  //     `https://power-plus-service.onrender.com/products`,
  //   ); Без токена 204
  //   return res;
  // };

  const { data, isLoading, isError } =
    useGetAllProductsQuery();
    // ['products', page],
    // () => getAllProducts(page), {
    //   keepPreviousData: true,
    // }
  console.log(data);
  const products = data?.slice(0, 20);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {products && (
        <List>
          {products.map(({ _id, weight, calories, category, title }) => (
            <Card key={_id}>
              <ProductsItem
                weight={weight}
                calories={calories}
                category={category}
                title={title}
                id={_id}
              />
            </Card>
          ))}
        </List>
      )}{' '}
      {!isLoading && !isError && !products && (
        <>
          <p>
            Sorry, no results were found for the product filters you selected.
            You may want to consider other search options to find the product
            you want. Our range is wide and you have the opportunity to find
            more options that suit your needs.
          </p>
          <p>Try changing the search parameters.</p>
        </>
      )}
    </>
  );
};
export default ProductsList;
