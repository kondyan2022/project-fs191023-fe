import styled from '@emotion/styled';
export const FormContainer = styled.div`
  margin-top: 20px;

  position: relative;

  p {
    position: absolute;
    font-family: Roboto;
    top: 66px;
    left: 0px;
    font-size: 12px;
    color: var(--color-rad);
  }

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 700px;
    p {
      top: 87px;
    }
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
  width: 335px;
  padding: 14px;
  margin-bottom: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  font-size: 14;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 341px;
  }
  &:focus {
    outline: none;
    border-color: var(--color-orange);
  }
`;

export const WrapperInputField = styled.div`
  display: inline-flex;
  gap: 14px;
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 14px;
  }
`;

export const InputField = styled.input`
  width: 165px;
  padding: 14px;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  color: var(--color-white);
  &:focus {
    outline: none;
    border-color: var(--color-orange);
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

  @media screen and (min-width: 1440px) {
    display: block;
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

export const Button = styled.button`
  margin: 40px 0px 80px 20px;
  padding: 12px 40px;
  border-radius: 12px;
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
  height: 100px;
  margin-top: 14px;

  p {
    font-size: 12px;
    color: var(--color-rad);
  }
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
