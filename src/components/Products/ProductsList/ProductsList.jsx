import ProductsItem from '../ProductsItem/ProductsItem';
import products from '../../../../resources/products.json';
import { Card, List } from './ProductsList.styled';
import Container from '../../Container/Container';
const ProductsList = () => {
  const partOfProducts = products.slice(1, 16);
  return (
    <Container>
      <List>
        {partOfProducts.map(({ _id, weight, calories, category, title }) => (
          <Card key={_id.$oid}>
            <ProductsItem
              weight={weight}
              calories={calories}
              category={category}
              title={title}
              id={_id.$oid}
            />
          </Card>
        ))}
      </List>
    </Container>
  );
};
export default ProductsList;
