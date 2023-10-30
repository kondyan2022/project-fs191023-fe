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
  CleanButton,
} from './Filter.styled';
import categories from '../../../../resources/productsCategories.json';
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useGetGroupProductQuery } from '../../../redux/features/prodEndpoints';

const Filter = ({
  currentCategory,
  setCurrentCategory,
  currentRecomm,
  setCurrentRecomm,
  // setQuery,
}) => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isRecommOpen, setIsRecommOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [isFulled, setIsFulled] = useState(false);
  const [value, setValue] = useState("");

  // const categories = useGetGroupProductQuery();

  const updatedStr = (str) => {
    const firstLatter = str[0].toUpperCase();
    return firstLatter + str.slice(1);
  };

  const onCleanInputContent = () => {
    setValue("");
  }

  const onSubmitRequest = (e) => {
    let value = e.target.elements.search.value;
    e.preventDefault();
    // setQuery(value);
    if (value === '') {
      return;
    }
    setSearchParams({ q: value });
    value = searchParams.get('q');
  };

  return (
    <Wrap>
      <SupText>Filters</SupText>
      <List>
        <li>
          <form onSubmit={onSubmitRequest}>
            <Input
              type="text"
              placeholder="Search"
              name="search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            {value !== '' && (
              <CleanButton type="button" onClick={onCleanInputContent}>
                <svg>
                  <use href={`${sprite}#icon-clean-filter`}></use>
                </svg>
              </CleanButton>
            )}
            <SearchButton type="submit">
              <svg>
                <use href={`${sprite}#icon-search`}></use>
              </svg>
            </SearchButton>
          </form>
        </li>
        <li>
          <CategoriesSelect>
            <select
              name="categories"
              id="categories"
              autoComplete="off"
              hidden
            ></select>
            <Text
              onClick={() => {
                setIsCatOpen(!isCatOpen);
              }}
            >
              <p>{currentCategory || 'Categories'}</p>
              <svg>
                <use href={`${sprite}#icon-filter-down`}></use>
              </svg>
            </Text>
            {isCatOpen && (
              <CategoriesList height={['228px', '276px']}>
                <ul>
                  {categories.map((elem) => (
                    <li
                      key={elem}
                      onClick={(e) => {
                        const text = e.target.textContent;
                        setIsCatOpen(!isCatOpen);
                        setCurrentCategory(
                          text.length > 16 ? text.slice(0, 10) + '...' : text,
                        );
                      }}
                    >
                      <p>{updatedStr(elem)}</p>
                    </li>
                  ))}
                </ul>
              </CategoriesList>
            )}
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
            <Text
              onClick={() => {
                setIsRecommOpen(!isRecommOpen);
              }}
            >
              <p>{currentRecomm || 'All'}</p>
              <svg>
                <use href={`${sprite}#icon-filter-down`}></use>
              </svg>
            </Text>
            {isRecommOpen && (
              <CategoriesList height={['98px', '116px']}>
                <ul>
                  {['All', 'Recommended', 'Not recommended'].map((item) => (
                    <li
                      key={item}
                      onClick={(e) => {
                        const text = e.target.textContent;
                        setIsRecommOpen(!isRecommOpen);
                        setCurrentRecomm(text);
                      }}
                    >
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </CategoriesList>
            )}
          </RecommSelect>
        </li>
      </List>
    </Wrap>
  );
};
export default Filter;
