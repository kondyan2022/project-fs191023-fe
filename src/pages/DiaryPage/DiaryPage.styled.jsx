import styled from '@emotion/styled';

export const PageName = styled.h1`
color:var(--color-white);
font-size: 32px;
font-weight: 700;
line-height: 1.3;

@media screen and (min-width: 768px){
    margin-bottom:32px;
    margin-top:72px;
}
`


export const DescktopStyle = styled.div`
    @media screen and (min-width: 768px){
   display:flex;
   flex-direction: column-reverse;
}

@media screen and (min-width: 1440px){
    flex-direction: row-reverse;
    text-align:center;
    gap:32px;
}


`