import styled from '@emotion/styled';
import { Field } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const Modal = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: #10100f;
  max-width: 335px;
  width: calc(100% - 40px);
  height: 280px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;

  @media screen and (min-width: 768px) {
    max-width: 479px;
    width: 479px;
    height: 286px;
  }
`;

export const CloseButton = styled.button`
  background-color: inherit;
  color: white;
  margin-left: auto;
  padding: 0;
  margin-bottom: 8px;
`;

export const FormBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  div:first-of-type {
    display: flex;
    align-items: center;
    width: 100%;
    height: 34px;
    padding: 5px 0;
    padding-left: 14px;
    border-radius: 12px;
    border: 1px solid var(--color-orange);
    font-size: 14px;
    line-height: 18px;

    p {
      color: rgba(239, 237, 232, 0.3);
      line-height: 24px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    div:first-of-type {
      width: 244px;
      height: 40px;

      p {
        font-size: 16px;
      }
    }
  }
`;

export const Input = styled(Field)`
  height: 34px;
  width: 100%;
  padding: 8px 0;
  padding-left: 14px;
  font-size: 14px;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid var(--color-orange);
  color: var(--color-white);
  background-color: inherit;

  &:hover,
  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const GramsText = styled.p`
  position: absolute;
  top: 58px;
  right: 16px;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    top: 11px;
    right: 14px;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--color-rad);
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.12px;
`;

export const Calories = styled.p`
  position: absolute;
  top: 100px;
  left: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  line-height: 18px;

  span {
    color: var(--color-white);
  }

  @media screen and (min-width: 768px) {
    top: 56px;
  }
`;

export const ButtonsList = styled.ul`
  position: absolute;
  width: 100%;
  left: 0;
  top: 142px;
  display: flex;
  gap: 14px;

  li:first-of-type {
    width: 55%;
  }

  li:last-of-type {
    width: calc(45% - 14px);
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
    justify-content: start;

    li:first-of-type {
      width: 151px;
      height: 52px;
    }
    li:last-of-type {
      width: 142px;
      height: 52px;
    }
  }
`;

export const StyledAddButton = styled.button`
  width: 100%;
  height: 42px;
  margin: 0;
  text-align: center;
  padding: 12px auto;
  border-radius: 12px;
  background: var(--color-orange);
  border: none;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  transition: all 0.1s linear;

  @media screen and (min-width: 768px) {
    width: 151px;
    height: 52px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: var(--color-orange-one);
  }
`;

export const StyledCancelButton = styled.button`
  width: 100%;
  height: 42px;
  padding: 0;
  margin: 0;
  text-align: center;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  transition: all 0.1s linear;

  @media screen and (min-width: 768px) {
    width: 142px;
    height: 52px;
    font-size: 20px;
    line-height: 24px;
  }

  &:hover,
  &:focus {
    background-color: #1a1919;
  }
`;
