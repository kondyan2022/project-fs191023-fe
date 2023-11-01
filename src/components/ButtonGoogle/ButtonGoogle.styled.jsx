import styled from 'styled-components'

export const Button = styled.div`
    width: 100%;
    max-width: 136px;
    color: var(--color-white);
    background: transparent;
    border-radius: 12px;
    border: 2px solid var(--accent-color-grey); 
    outline: none ;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.2;
    overflow: hidden;
    margin-top: 18px;
    transition: border-color linear 500ms;

    @media (min-width: 768px) {
            max-width:  190px;
            font-size: 16px;
            margin-top: 20px;
        }

    a { width: 100%;
        text-decoration: none;
        color: var(--color-white);
        padding: 12px 2px;
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;
          @media (min-width: 768px) {
            padding: 16px 10px;
        }
        svg {
            width: 18px;
            height: 18px;
            @media (min-width: 768px){
                width: 24px;
                height: 24px;
            }
        }
    }
    &:hover {
        border-color: var(--color-orange);
    }
`