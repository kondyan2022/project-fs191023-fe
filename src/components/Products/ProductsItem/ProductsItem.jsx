import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import {
  Diet,
  ActionBlock,
  Recommended,
  Button,
  Title,
  DetailsList,
  Wrap,
} from './ProductsItem.styled';
import AddModal from '../AddModal/AddModal';
// icon-search icon-run-man
const ProductsItem = ({ weight, calories, category, title }) => {
  const isRecommended = false;
  const wdt = window.innerWidth;
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openModal = () => {
    setIsAddModalOpen(true);
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
  };

  // обрізає задовгі категорії, є маленький баг

  const updatedCategory = () => {
    if (wdt < 375 && category.length > 6) {
      return category.slice(0, 3) + '...';
    }
    if (wdt < 768 && wdt >= 375 && category.length > 11) {
      // return category.slice(0, 10) + '...';
      return category.slice(0, 3) + '...';
    }
    if (wdt >= 768 && category.length > 11) {
      // return category.slice(0, 10) + '...';
      return category.slice(0, 3) + '...';
    }
    return category;
  };

  // обрізає задовгі назви

  const updatedTitle = () => {
    if (wdt < 375 && title.length > 17) {
      return title.slice(0, 18) + '...';
    }
    if (wdt < 768 && wdt >= 375 && title.length > 24) {
      return title.slice(0, 25) + '...';
    }
    if (wdt >= 768 && title.length > 22) {
      return title.slice(0, 20) + '...';
    }
    return title;
  };

  return (
    <>
      {isAddModalOpen && (
        <AddModal closeModal={closeModal} title={title} calories={calories} />
      )}
      <ActionBlock>
        <Diet>
          <p>Diet</p>
        </Diet>
        <Wrap>
          <Recommended isRecomm={isRecommended}>
            <div></div>
            <p>{isRecommended ? 'Recommended' : 'Not recommended'}</p>
          </Recommended>
          <Button type="button" onClick={openModal}>
            Add
            <svg>
              <use href={`${sprite}#icon-arrow`}></use>
            </svg>
          </Button>
        </Wrap>
      </ActionBlock>
      <div>
        <Title>
          <div>
            <svg>
              <use href={`${sprite}#icon-run-man`}></use>
            </svg>
          </div>
          <p>{updatedTitle()}</p>
        </Title>
        <DetailsList>
          <li>
            <p>
              Calories:<span>{calories}</span>
            </p>
          </li>
          <li>
            <p>
              Category:
              <span>{updatedCategory()}</span>
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