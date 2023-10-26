import styled from 'styled-components'
import {
  // Formik,
  Field,
  Form,
  // ErrorMessage
} from 'formik';

export const InputsParent = styled.div`
position: relative;
`

export const BoxParent = styled.div`
position: relative;
`

export const Input = styled(Field)`
  width: 100%;
    background-color:  var(--color-black);
    padding: 14px 31px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.30);
    outline: none;
    color: var(--color-white);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 22px;
    &::placeholder {
      background-color: var(--color-black);
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
  /* @media screen and (min-width: 375px) {
    width: 335px;
    height: 46px;
  } */
`

export const StatusWrapp = styled.div`
display: flex;
gap: 10px;
align-items: center;
/* margin-top: 14px; */
position: absolute;
bottom: -5%;
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
export const FormBox = styled(Form)`
width: 307px;
display: flex;
flex-direction: column;
gap: 20px;
`
export const BtnShowPassword = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  background-color: transparent;
`

export const SvgEye = styled.svg`
stroke: var(--color-white);
`