import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 127px;
    padding-bottom: 483px;
    @media(min-width: 768px) {
        padding-top: 189px;
        padding-bottom: 481px;
    }
    @media(min-width: 1440px){
        padding-top: 200px;
        padding-bottom: 246px;
    }
`

export const WrappTitle = styled.div`
    width: 100%;
    max-width: 335px;
    margin-bottom: 40px;
    position: relative;
    @media(min-width: 768px) {
        max-width: 598px;
        margin-bottom: 64px;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        font-size: 38px;
        font-weight: 500;
        line-height: 40px; 
        letter-spacing: 0.38px;
        @media(min-width: 768px) {
            font-size: 70px;
            line-height: 78px;
            letter-spacing: 0.7px;
        }
    }
`
export const WrapperFlex = styled.div`
    display: flex;
    gap: 14px;
        @media(min-width: 768px) {
            gap: 20px;
    }
`

// @media(min-width: 375px) {
// }
// @media(min-width: 768px) {
// }
// @media(min-width: 1440px) {
// }
