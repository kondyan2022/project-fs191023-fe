import styled from 'styled-components'
import {
    // Formik,
    Field,
    Form,
    // ErrorMessage
} from 'formik';

export const Input = styled(Field)`
    background-color: transparent;
    padding: 14px 31px 14px 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.30);
    outline: none;
    color: var(--color-white);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

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

     &:hover,
  &:focus {
    border: 1px solid #E6533C;
    background-color: transparent;

    /* outline: 0; */
  }
  &.default {
    border: 1px solid rgba(239, 237, 232, 0.3);
    /* outline: 0; */

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

export const FormBox = styled(Form)`
width: 307px;
display: flex;
flex-direction: column;
gap: 20px;
`

