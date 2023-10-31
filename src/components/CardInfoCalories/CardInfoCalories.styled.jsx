import styled from 'styled-components'


export const CardCalories = styled.div`
    background: #ef8964;
    width: 119px;
    height: 76px;
    border-radius: 12px;
    padding: 18px 27px 14px 18px;
    position: absolute;
    right: 20px;
    bottom: 40px;
    @media (min-width: 768px) {
        width: 180px;
        height: 110px;
        right: 32px;
        bottom: 48px;
        padding: 18px 14px 14px 28px;
    }
    @media (min-width: 1440px) {
        bottom: 163px;
    }
`;

export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--color-beige);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
        margin-bottom: 12px;
    }
`;

export const FlexParent = styled.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    @media (min-width: 768px) {
        gap: 11px;
    }
    span {
        color: var(--color-white);
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -1px;
        @media (min-width: 768px) {
            font-size: 48px;
            line-height: 0.9;
        }
    }
    p {
        color: rgba(239, 237, 232, 0.65);
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        font-weight: 700;
        line-height: 0.75;
        @media (min-width: 768px) {
            font-size: 16px;
            line-height: 0.66;
        }
    }
`;

export const IconRunMenStyled = styled.svg`
    fill: var(--color-white);
    width: 12px;
    height: 12px;
        @media(min-width: 768px) {
            width: 16px;
            height: 16px;
        }
`;