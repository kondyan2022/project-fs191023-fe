import styled from 'styled-components';

export const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;
export const WrapperMark = styled.div`
  display: flex;
  width: 439px;
  gap: 8px;

  @media screen and (min-width: 768px) {
    width: 440px;
    padding-left: 20px;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 24px;
  height: 24px;
  background-color: var(--color-beige);
`;

export const Text = styled.p`
  color: var(--accent-color-grey);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
