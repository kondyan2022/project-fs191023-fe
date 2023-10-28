import styled from 'styled-components'

export const IconPlayVideoStyled = styled.svg`
position: absolute;
    fill: var(--color-white);
    width: 12px;
    height: 12px;
    bottom: 9px;
    left: 10px;
        @media(min-width: 768px) {
            width: 20px;
            height: 20px;
            bottom: 9.5px;
            left: 12px;
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

export const IconCircleDecorStyled = styled.svg`
    z-index: -1;
    stroke-width: 2px;
    stroke: var(--color-orange-one);
    fill: transparent;
    width: 98px;
    height: 35px;
    position: absolute;
    top: 43px;
    left: -8px;
    @media(min-width: 768px) {
        width: 185px;
        height: 67px;
        top: 85px;
        left: -15px;
    }
`;
