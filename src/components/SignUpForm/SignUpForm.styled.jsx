import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik';

export const Input = styled(Field)`
    /* background-color: transparent;
    padding: 14px 310px 14px 14px;
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
    } */
`

export const FormBox = styled(Form)`
width: 307px;
display: flex;
flex-direction: column;
gap: 20px;
`