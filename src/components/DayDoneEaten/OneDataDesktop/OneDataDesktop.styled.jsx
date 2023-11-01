
import styled from '@emotion/styled';

export const ProduktsDesktop = styled.div`
  display:flex;
  gap: 8px;
  margin-bottom:8px;
`

export const RecommendDesk = styled.div`
display:flex;
text-align:center;
align-items:center;
width: 80px;
height: 40px;
padding: 8px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);

font-family: Roboto;
font-size: 16px;
line-height: 1.5;
text-align: left;
color:var(--color-white);
@media screen and (min-width: 1440px){
  width:110px;
  padding: 8px 48px 8px 14px;
}
`

export const OneData = styled.div`
width: ${props => props.styles.width};
height: 40px;
padding: 8px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);

font-family: Roboto;
font-size: 16px;
line-height: 1.5;
text-align: left;
color:var(--color-white);

overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;

display:${props => props.styles.display};

::first-letter {
  text-transform: uppercase;
}

@media screen and (min-width: 1440px){
  width:${props => props.styles.widthDesktop};
} 
`

