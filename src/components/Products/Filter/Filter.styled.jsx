import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: relative;
`;

export const SupText = styled.p`
  visibility: hidden;
  display: none;
  position: absolute;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 1440px) {
    visibility: visible;
    display: block;
    right: 0;
    top: -26px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  max-width: 335px;

  & > li:first-of-type {
    width: 100%;
    position: relative;
  }
  & > li:nth-of-type(2) {
    width: 44%;
  }
  & > li:nth-of-type(3) {
    width: calc(56% - 16px);
  }

  @media screen and (min-width: 768px) {
    max-width: 664px;
    height: 52px;

    li {
      height: 100%;
    }
    & > li:first-of-type {
      width: 236px;
      position: relative;
    }
    & > li:nth-of-type(2) {
      width: 192px;
    }
    & > li:nth-of-type(3) {
      width: 204px;
    }
  }
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 46px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  font-size: 14px;
  line-height: 18px;
  transition: all 100ms linear;
  cursor: pointer;

  &::placeholder {
    color: var(--color-white);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    height: calc(100%);
  }
`;

export const CategoriesSelect = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 46px;
  cursor: pointer;
`;

export const CategoriesList = styled.div`
  position: absolute;
  display: ${({ isVisible }) => {
    return isVisible === 'true' ? 'block' : 'none';
  }};
  width: 100%;
  height: ${({ height }) => {
    return height[0];
  }};
  top: 50px;
  background-color: transparent;
  padding: 14px 7px 14px 14px;
  border-radius: 12px;
  background: #1c1c1c;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    gap: 8px;

    li {
      width: 100%;
    }

    li p {
      transition: all 100ms linear;
      color: var(--color-white);
      font-size: 14px;
      line-height: 18px;
    }

    li:hover,
    li:focus {
      p {
        color: var(--color-orange-one);
      }
    }

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: rgba(239, 237, 232, 0.1);
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  &::placeholder {
    color: var(--color-white);
  }
  &:hover,
  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }

  @media screen and (min-width: 768px) {
    top: 56px;
    height: ${({ height }) => {
      return height[1];
    }};
    ul li p {
      font-size: 16px;
      line-height: 24px;
    }
    ul {
      &::-webkit-scrollbar {
        width: 8px;
      }
    }
  }
`;

export const RecommSelect = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 46px;
  cursor: pointer;
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  p {
    color: var(--color-white);
    font-size: 14px;
    line-height: 18px;
  }

  svg {
    stroke: var(--color-white);
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const SearchButton = styled.button`
  background-color: transparent;
  position: absolute;
  right: 14px;
  bottom: 14px;
  padding: 0;
  width: 18px;
  height: 18px;

  svg {
    stroke: var(--color-white);
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus {
    [Input] {
      outline: none;
      border-color: var(--color-orange);
    }
  }

  @media screen and (min-width: 768px) {
    bottom: 17px;
  }
`;
