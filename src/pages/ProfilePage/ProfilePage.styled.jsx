import styled from 'styled-components';

export const Title = styled.h2`
  color: #efede8;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 72px;
  }
`;

export const WrapperContent = styled.div`
  padding-bottom: 66px;
  @media (min-width: 768px) {
    padding-bottom: 54px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-bottom: 44px;
  }
`;

export const WrapperForm = styled.div`
  @media screen and (min-width: 1440px) {
    border-right: 1px solid rgba(239, 237, 232, 0.2);
    padding-right: 100px;
  }
`;

export const WrapperCard = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;

  @media screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: 157px 165px;
    justify-content: flex-start;
  }
`;

export const OrangCardProfile = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 96px;
  padding: 14px;
  background-color: var(--color-orange);

  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);

  @media screen and (min-width: 375px) {
    width: 159px;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  p {
    font-size: 12px;
    line-height: 1.3;
    color: rgba(239, 237, 232, 0.8);
    margin: 0;
  }
`;

export const Span = styled.span`
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;

  font-size: 18px;
  font-weight: 700;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
