import styled from 'styled-components'
import { Field } from 'formik';

export const FormBox = styled.div`
  max-width: 283px;
  display: flex;
  flex-direction: column;
  gap: 28px; // 18px +10 on status svg
  margin-bottom: 28px;
  @media(min-width: 768px) {
    max-width: 307px;
    margin-bottom: 64px;
    gap: 30px; // 20px +10 on status svg
  }
`

export const InputsParent = styled.div`
  position: relative;
`

export const BoxParent = styled.div`
  position: relative;
`

export const Input = styled(Field)`
  width: 100%;
    background-color: transparent;
    padding: 14px 31px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.30);
    outline: none;
    color: var(--color-white);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 0.7;
    /* margin-bottom: 22px; */
    &::placeholder {
      background-color: transparent;
      color: var(--accent-color-grey);
      font-family:'Roboto', sans-serif;
      font-size: 14px;
      line-height: 1.28;
      @media screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
      }
    }
    &:hover {
    border: 1px solid #e6533c;
    outline: 0;
  }
  &.default {
    border: 1px solid rgba(239, 237, 232, 0.3);
  }
  &.success {
    border: 1px solid #3cbf61;
  }
  &.error {
    border: 1px solid rgba(248, 5, 5, 0.973);
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const StatusWrapp = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  position: absolute;
  bottom: -18px;
`

export const SvgStatus = styled.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
    &.success {
      fill: #3CBF61;
    }
    &.error {
      fill: var(--color-rad);
  }
`

export const BtnShowPassword = styled.button`
  position: absolute;
  right: 16px;
  top: 12px;
  background-color: transparent;
`

export const SvgEye = styled.svg`
  stroke: var(--color-white);
`

export const SubmitParent = styled.div`
  position: relative;
`

export const WrappErrorServer = styled.div`
  color: var(--color-rad);
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px; 

  margin-top: 10px;
  position: absolute;
  top: -45px;

  @media(min-width: 768px) {
    font-size: 16px;
  }
`

// @media(min - width: 375px) {
// }
// @media(min - width: 768px) {

// }
// @media(min - width: 1440px) {
// }