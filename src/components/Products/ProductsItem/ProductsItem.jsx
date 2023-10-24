import sprite from '../../../images/sprite.svg';
import {
  Diet,
  ActionBlock,
  Recommended,
  Button,
  Title,
  DetailsList,
} from './ProductsItem.styled';
// icon-search icon-run-man
const ProductsItem = ({ weight, calories, category, title }) => {
  const isRecommended = true;
  return (
    <>
      <ActionBlock>
        <Diet>
          <p>Diet</p>
        </Diet>
        <Recommended isRecomm={isRecommended}>
          <div></div>
          <p>{isRecommended ? 'Recommended' : 'Not recommended'}</p>
        </Recommended>
        <Button type="button">
          Add
          <svg>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </Button>
      </ActionBlock>
      <div>
        <Title>
          <div>
            <svg>
              <use href={`${sprite}#icon-run-man`}></use>
            </svg>
          </div>
          <p>{title.length > 24 ? title.slice(0, 25) + '...' : title}</p>
        </Title>
        <DetailsList>
          <li>
            <p>
              Calories:<span>{calories}</span>
            </p>
          </li>
          <li>
            <p>
              Category:<span>{category}</span>
            </p>
          </li>
          <li>
            <p>
              Weight:<span>{weight}</span>
            </p>
          </li>
        </DetailsList>
      </div>
    </>
  );
};
export default ProductsItem;
