import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px 16px;
  width: 850px;
  height: 487px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-orange-one);
    border-radius: 12px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
  }
`;

export const Card = styled.li`
  width: 405px;
  height: 141px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  padding: 16px;
`;
