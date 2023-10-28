import {
  SupText,
  List,
  Input,
  CategoriesList,
  CategoriesSelect,
  RecommSelect,
  Text,
  SearchButton,
  Wrap,
} from './Filter.styled';
import categories from '../../../../resources/productsCategories.json';
import sprite from '../../../images/sprite.svg';

const Filter = () => {

  const updatedStr = (str) => {
    const firstLatter = str[0].toUpperCase();
    return firstLatter + str.slice(1);
  }

  return (
    <Wrap>
      <SupText>Filters</SupText>
      <List>
        <li>
          <Input type="text" placeholder="Search" />
          <SearchButton type="button">
            <svg>
              <use href={`${sprite}#icon-search`}></use>
            </svg>
          </SearchButton>
        </li>
        <li>
          <CategoriesSelect>
            <select
              name="categories"
              id="categories"
              autoComplete="off"
              hidden
            ></select>
            <Text>
              <p>Categories</p>
              <svg>
                <use href={`${sprite}#icon-filter-down`}></use>
              </svg>
            </Text>
            <CategoriesList isVisible="false" height={["228px", "276px"]}>
              <ul>
                {categories.map((elem) => (
                  <li key={elem}>
                    <p>{updatedStr(elem)}</p>
                  </li>
                ))}
              </ul>
            </CategoriesList>
          </CategoriesSelect>
        </li>
        <li>
          <RecommSelect>
            <select
              name="recomendation"
              id="recomendation"
              autoComplete="off"
              hidden
            ></select>
            <Text>
              <p>All</p>
              <svg>
                <use href={`${sprite}#icon-filter-down`}></use>
              </svg>
            </Text>
            <CategoriesList isVisible="false" height={["98px", "116px"]}> 
              <ul>
                <li>
                  <p>All</p>
                </li>
                <li>
                  <p>Recommended</p>
                </li>
                <li>
                  <p>Not recommended</p>
                </li>
              </ul>
            </CategoriesList>
          </RecommSelect>
        </li>
      </List>
    </Wrap>
  );
};
export default Filter;
