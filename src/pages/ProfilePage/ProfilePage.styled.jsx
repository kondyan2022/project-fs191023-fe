import styled from 'styled-components';
import { OrangCard } from '../../components/OneStatistic/OneStatistic.styled';

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
  @media(min-width: 768px) {
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

export const OrangCardProfile = styled(OrangCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 96px;
  padding: 14px;
  gap: 32px;
  background-color: var(--color-orange);

  border-radius: 12px;
  border: 1px solid;
  border-color: var(--accent-color-border);

  @media screen and (min-width: 375px) {
    width: 129px;
    height: 80px;
    padding: 14px 18px;
  }

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 14px 18px;
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
    line-height: 1.8;
    color: rgba(239, 237, 232, 0.8);
    margin: 0;
  }
`;
