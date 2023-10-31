import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    padding-top: 127px;
    padding-bottom: 373px;
    @media(min-width: 768px) {
        padding-top: 189px;
        padding-bottom: 445px;
    }
    @media(min-width: 1440px){
        padding-top: 200px;
        padding-bottom: 210px;
    }
    h2 {
        color: var(--color-white);
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        @media(min-width: 768px) {
            font-size: 32px;
            line-height: 44px; 
        }
    }
`

export const Text = styled.p`
    width: 100%;
    max-width: 335px;
    color: rgba(239, 237, 232, 0.30);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 18px; 
    font-weight: 400;
    margin-bottom: 28px;
    margin-top: 14px;
    @media(min-width: 768px) {
        max-width: 496px;
        font-size: 16px;
        line-height: 24px; 
        margin-bottom: 32px;
        margin-top: 16px;
    }
`

export const Redirect = styled.div`
    color: rgba(239, 237, 232, 0.60);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-decoration-line: none;
    margin-top: 12px;
`
export const LinkTo = styled(NavLink)`
    text-decoration-line: underline;
    color: var(--color-white);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
`