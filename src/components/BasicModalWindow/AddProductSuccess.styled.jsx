import styled from 'styled-components';

export const ModalWindow = styled.div`
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 40px);
  max-width: 335px;
  height: 362px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 430px;
    max-width: 430px;
    height: 428px;
  }
`;

export const ModalWindowWrap = styled.div`
  /* padding: 48px 89px; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    /* padding: 64px 134px; */
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
  margin-bottom: 3px;
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
  stroke: var(--color-white);
`;
