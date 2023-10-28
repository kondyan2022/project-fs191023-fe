import styled from 'styled-components';

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalWindowWrap = styled.div`
  padding: 48px 89px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`;

export const ModalWindowWrapImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalWindowImg = styled.img`
  width: 123px;
  height: 97px;
  margin-bottom: 32px;
`;

export const ModalWindowTitle = styled.p`
  color: var(--color-modal-btn-close);
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const ModalWindowText = styled.p`
  color: var(--accent-color-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ModalWindowSpan = styled.span`
  color: var(--color-orange);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const ModalWindowBtn = styled.button`
  border-radius: 12px;
  background: var(--color-orange);
  padding: 14px 32px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 16px;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }

  &:hover,
  &:focus {
    background: var(--color-orange-one);
    color: var(--color-white);
  }
`;

export const ArrowRightIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--white-color);
`;
