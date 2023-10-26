import { useEffect } from 'react';
import Container from '../../components/Container/Container';
import ProductsList from '../../components/Products/ProductsList/ProductsList';
// import { useGetAllProductsQuery } from '../../redux/features/prodEndpoints';
const ProductsPage = () => {
  // useGetAllProductsQuery()
  useEffect(() => {}, []);
  return (
    <Container>
      <div>
        <ProductsList />
      </div>
    </Container>
  );
};
export default ProductsPage;
