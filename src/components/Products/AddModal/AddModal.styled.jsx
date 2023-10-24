import styled from '@emotion/styled';

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  /* width: 100%;
  height: 100%; */
  position: fixed;
  background: rgba(4, 4, 4, 0.4);
`;

export const Modal = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  width: 479px;
  height: 286px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
`;

export const CloseButton = styled.button`
  background-color: inherit;
  color: white;
  margin-left: 432px;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  div:first-of-type {
    padding: 8px 0;
    padding-left: 14px;
    border-radius: 12px;
    border: 1px solid var(--color-orange);
    width: 244px;
    height: 40px;

    p {
      color: rgba(239, 237, 232, 0.3);
      line-height: 24px;
    }
  }
`;

export const Grams = styled.div`
  position: relative;
  input {
    height: 40px;
    width: 155px;
    padding: 8px 0;
    padding-left: 14px;
    line-height: 24px;
    border-radius: 12px;
    border: 1px solid var(--color-orange);
    color: var(--color-white);
    background-color: inherit;

    &:hover,
    &:focus {
      outline: none;
    }
  }

  p {
    position: absolute;
    top: 10px;
    right: 14px;
    color: rgba(239, 237, 232, 0.4);
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Calories = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 64px;

  span {
    color: var(--color-white);
  }
`;

export const ButtonsList = styled.ul`
  left: 0;
  display: flex;
  gap: 16px;
`;
