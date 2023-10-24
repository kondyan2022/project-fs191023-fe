import styled from '@emotion/styled';

export const ExBoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`

export const ExBoardItem = styled.li`
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 32px)/3);
}

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 64px)/5);
    }
`