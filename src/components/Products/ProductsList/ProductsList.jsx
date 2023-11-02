import ProductsItem from '../ProductsItem/ProductsItem';
import { Card, List } from './ProductsList.styled';

const ProductsList = ({
  products,
  setExcessCalories,
  blood,
  setIsAddedSuccess,
  isLoading,
  currenrRef,
}) => {
  return (
    <>
      <List ref={currenrRef}>
        {products.map(
          ({
            _id,
            weight,
            calories,
            category,
            title,
            groupBloodNotAllowed,
          }) => (
            <Card key={_id}>
              <ProductsItem
                weight={weight}
                calories={calories}
                category={category}
                title={title}
                id={_id}
                setExcessCalories={setExcessCalories}
                isRecom={!groupBloodNotAllowed[blood]}
                groupBloodNotAllowed={groupBloodNotAllowed}
                setIsAddedSuccess={setIsAddedSuccess}
                isLoading={isLoading}
              />
            </Card>
          ),
        )}
      </List>
    </>
  );
};
export default ProductsList;
