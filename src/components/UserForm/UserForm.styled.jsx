import styled from '@emotion/styled';
export const FormContainer = styled.div`
  margin-top: 20px;
  position: relative;
  div {
    padding: 0 7px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
  }
`;

export const Status = styled.div`
  position: absolute;
  display: block;
  display: flex;
  align-items: center;
  gap: 2px;
  top: 65px;
  left: 0px;

  p {
    font-family: Roboto;

    font-size: 12px;
  }

  svg {
    width: 16px;
    height: 16px;
    &.success {
      fill: #3cbf61;
    }
    &.error {
      fill: var(--color-rad);
    }
  }

  button {
    margin: 40px;
  }
  @media screen and (min-width: 768px) {
    top: 88px;
    left: 0px;
  }
`;

export const SectionTitle = styled.h4`
  color: var(--color-white);
  margin-top: 18px;
  margin-bottom: 4px;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  min-width: 100%;
  max-width: 335px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  font-size: 14;

  &.success {
    border: 1px solid #3cbf61;
  }
  &.error {
    border: 1px solid rgba(248, 5, 5, 0.973);
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
  }
  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }
`;

export const WrapperInputField = styled.div`
  /* display: inline-flex; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 50%;
  @media screen and (min-width: 768px) {
    padding: 9px;
  }
`;

export const DivInputField = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WrapperDatepicker = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 50%;
  margin-left: 14px;
  /* border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent; */
  color: var(--color-white);
  @media screen and (min-width: 768px) {
    padding: 9px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 14px;
  align-items: center;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  &.success {
    border: 1px solid #3cbf61;
  }
  &.error {
    border: 1px solid rgba(248, 5, 5, 0.973);
  }

  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }
  @media screen and (min-width: 768px) {
    width: 140px;
  }
  @media screen and(max-width: 1439px) {
  }
`;

export const Label = styled.label`
  color: var(--color-white);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const WrapperRadio = styled.div`
  margin-top: 4px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media screen and (min-width: 1440px) {
    display: block;
    margin-bottom: 48px;
  }

  .radio {
    position: relative;
  }

  .radio-input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .radio-label {
    padding-left: 25px;
    cursor: pointer;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.71em;
    letter-spacing: -0.28px;
    color: var(--color-white);
    margin-right: 9px;

    @media screen and (min-width: 768px) and (max-width: 1439px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .radio-label::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid #636366;
    background-color: transparent;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 0;
  }

  .radio-label::after {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid var(--color-orange);
    background-color: var(--color-orange);
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 7px;
    left: 4px;
    z-index: 2;
  }

  .radio-input:checked + .radio-label::before {
    border-color: var(--color-orange);
  }

  .radio-input:checked + .radio-label::after {
    opacity: 1;
  }
`;

export const WrapperLevel = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const WrappInput = styled.div`
  position: relative;
  height: 100px;
  /* width: 100%; */
  margin-top: 14px;
  gap: 14px;

  label {
    margin-bottom: 4px;
    display: block;
    color: var(--color-white);
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

export const StatusWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 2px;
  top: 71px;
  left: 0px;

  p {
    font-family: Roboto;

    font-size: 12px;
  }

  svg {
    width: 16px;
    height: 16px;
    &.success {
      fill: #3cbf61;
    }
    &.error {
      fill: var(--color-rad);
    }
  }
  @media screen and (min-width: 768px) {
    top: 73px;
    left: 0px;
  }
`;

export const BirthdayWrapper = styled.div``;
