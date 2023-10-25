import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  /* margin-bottom: 80px; */
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    overflow-y: auto;
    /* margin-bottom: 34px; */
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
  }
  @media screen and (min-width: 1440px) {
    max-height: calc(100vh - 325px);
    width: 850px;
    max-width: 100%;
    overflow-y: auto;
    padding-right: 16px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ef8964;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
`;
