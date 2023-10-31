import ProductsItem from '../ProductsItem/ProductsItem';
import { Card, List } from './ProductsList.styled';

const ProductsList = ({
  products,
  setExcessCalories,
  blood,
  setIsAddedSuccess,
  isLoading,
}) => {
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
      </List>
      {/* {!isLoading && !isError && !products && (
        <>
          <p>
            Sorry, no results were found for the product filters you selected.
            You may want to consider other search options to find the product
            you want. Our range is wide and you have the opportunity to find
            more options that suit your needs.
          </p>
          <p>Try changing the search parameters.</p>
        </>
      )} */}
    </>
  );
};
export default ProductsList;
