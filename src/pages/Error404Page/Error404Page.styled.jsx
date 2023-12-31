import styled from 'styled-components'

export const WrappParent = styled.div`
    width: 100%;
    height:  812px;
    position: relative;
        @media (min-width: 768px) {
            height: 1024px;
        }
        @media (min-width: 1440px) {
            height: 800px;
        }
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 240px;
    height: 812px;
    background-color: var(--color-orange);
    position: absolute;
    top: 0;
    left: -20px;
    padding: 250px 20px;

    @media (min-width: 768px) {
        max-width: 420px;
        height: 1024px;
        left: -32px;
        padding: 309px 32px;
    }
    @media (min-width: 1440px) {
        max-width: 669px;
        height: 800px;
        left: -96px;
        padding: 221px 96px;
    }
    h1{
        color: var(--color-white);
        font-family: 'Roboto', sans-serif;
        font-size: 66px;
        font-weight: 500;
        line-height: 1; 
        letter-spacing: 0.66px;
        margin-bottom: 14px;
        @media (min-width: 768px) {
            font-size: 160px;
            line-height: 1.06; 
            letter-spacing: 1.6px;
            margin-bottom: 28px;
        }
    }
        p {
            margin-bottom: 28px;
            width: 100%;
            max-width: 200px;
            color: var(--color-white);
            font-family: 'Roboto', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.2;
            @media (min-width: 768px) {
                max-width: 356px;
                font-size: 16px;
                line-height: 1.5; 
            }
            @media (min-width: 1440px) {
                max-width: 477px;
            }
        }
`

export const SvgLogo = styled.svg`
    z-index: 100;
    --color1: #efede8;
    position: absolute;
    width: 126px;
    height: 13px;
    top: 24px;
    @media screen and (min-width: 768px) {
        width: 151px;
        height: 17px;
        top: 32px;
    }
`