import { forwardRef } from 'react';
import ProductsItem from '../ProductsItem/ProductsItem';
import { Card, List } from './ProductsList.styled';

const ProductsList = forwardRef(function ProductsList(
  { products, setExcessCalories, blood, setIsAddedSuccess, isLoading },
  ref,
) {
  return (
    <>
      <List>
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
        <li ref={ref} style={{ width: 50, height: 20 }} />
      </List>
    </>
  );
});
export default ProductsList;
