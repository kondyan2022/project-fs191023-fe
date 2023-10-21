import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  outline: 1px dashed yellow;
  /* @media screen and (min-width: 375px) {
    width: 375px;
  } */
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding-left: 96px;
    padding-right: 96px;
  }
`;

export default Container;
