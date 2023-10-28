import styled from '@emotion/styled';

export const ExercisesPageWrap = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; */
  margin-top: 40px;

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExercisesBox = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 64px;
  }
`;

export const ExercisesTitle = styled.h2`
  @media screen and (max-width: 767.99px) {
    margin-bottom: 20px;
  }
  margin-block: 0;
  color: var(--color-white);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
`;
