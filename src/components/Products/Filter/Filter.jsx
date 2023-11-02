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
import sprite from '../../../images/sprite.svg';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetGroupProductQuery } from '../../../redux/features/prodEndpoints';

const Filter = ({ setCurrentCategory, setCurrentRecomm }) => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isRecommOpen, setIsRecommOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('q') || '');

  const { data } = useGetGroupProductQuery();

  const updatedStr = (str) => {
    const firstLatter = str[0].toUpperCase();
    return firstLatter + str.slice(1);
  };

  const onCleanInputContent = () => {
    setValue('');
    setSearchParams({});
  };

  const onSubmitRequest = (e) => {
    let value = e.target.elements.search.value;
    e.preventDefault();
    if (value === '') {
      return;
    }
    const params = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...params,
      q: value,
    });
    setValue(value);
  };

  const textContent = () => {
    const curCategory = searchParams.get('category');
    if (curCategory) {
      const updatedText = `${curCategory
        .slice(0, 1)
        .toUpperCase()}${curCategory.slice(1)}`;

      return updatedText.length > 16
        ? updatedText.slice(0, 10) + '...'
        : updatedText;
    }

    return 'Categories';
  };

  const recomTextContent = () => {
    const params = Object.fromEntries([...searchParams]);
    if (params.recommend) {
      return params.recommend === 'true' ? 'Recommended' : 'Not recommended';
    }
    return 'All';
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
              autoComplete='off'
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
              <p>{textContent()}</p>
              <svg>
                <use href={`${sprite}#icon-filter-down`}></use>
              </svg>
            </Text>
            {isCatOpen && (
              <CategoriesList height={['228px', '276px']}>
                <ul>
                  <li key={'Categories'} onClick={() => {
                    const params = Object.fromEntries([...searchParams]);
                    if (params.category) {
                      delete params.category;
                      setSearchParams({ ...params });
                    }
                    setIsCatOpen(!isCatOpen);
                  }}>
                    <p>Categories</p>
                  </li>
                  {data.map(({ name }) => (
                    <li
                      key={name}
                      onClick={(e) => {
                        const text = e.target.textContent;
                        setIsCatOpen(!isCatOpen);
                        const params = Object.fromEntries([...searchParams]);
                        setSearchParams({
                          ...params,
                          category: name,
                        });
                        setCurrentCategory(
                          text.length > 16 ? text.slice(0, 10) + '...' : text,
                        );
                      }}
                    >
                      <p>{updatedStr(name)}</p>
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
              <p>{recomTextContent()}</p>
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
                        if (item === 'All') {
                          const params = Object.fromEntries([...searchParams]);
                          if (params.recommend) {
                            delete params.recommend;
                            setSearchParams({ ...params });
                          }
                        }
                        if (item !== 'All') {
                          const params = Object.fromEntries([...searchParams]);
                          setSearchParams({
                            ...params,
                            recommend: item === 'Recommended' ? true : false,
                          });
                        }
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
