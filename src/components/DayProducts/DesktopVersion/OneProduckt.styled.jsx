//DesktopStyled
import styled from '@emotion/styled';

// export const DesktopStyled = styled.div`
//   display:flex;
//   margin-top:16px;
// `



export const ProduktsDesktop = styled.div`
  display:flex;
  gap: 8px;
  margin-bottom:8px;
`

export const TiTleDesk = styled.div`
width: 204px;
height: 40px;
padding: 8px 42px 8px 14px;
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

::first-letter {
  text-transform: uppercase;
}

@media screen and (min-width: 1440px){
  width:212px;
  padding: 8px 50px 8px 14px;
}

`

export const CategoryDesk = styled.div`
width: 128px;
height: 40px;
padding: 8px 77px 8px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);

font-family: Roboto;
font-size: 16px;
line-height: 1.5;
text-align: left;
color:var(--color-white);

::first-letter {
  text-transform: uppercase;
}
@media screen and (min-width: 1440px){
  width:166px;
  padding: 8px 115px 8px 14px;
}
`

export const CaloryDesk = styled.div`
width: 90px;
height: 40px;
padding: 8px 49px 8px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);

font-family: Roboto;
font-size: 16px;
line-height: 1.5;
text-align: left;
color:var(--color-white);

@media screen and (min-width: 1440px){
  width:105px;
  padding: 8px 64px 8px 14px;
}
`

export const WeightDesk = styled.div`
width: 90px;
height: 40px;
padding: 8px 49px 8px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);

font-family: Roboto;
font-size: 16px;
line-height: 1.5;
text-align: left;
color:var(--color-white);

@media screen and (min-width: 1440px){
  width:105px;
  padding: 8px 64px 8px 14px;
}
`

export const RecommendDesk = styled.div`
display:flex;
text-align:center;
align-items:center;
width: 80px;
height: 40px;
padding: 8px 18px 8px 14px;
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

export const DesktopStyled = styled.div`
  display:flex;
  margin-top:16px;
`

export const NamOfCategoryDesk = styled.p`
    color:var( --color-orange-one);
    font-size:12px;
    line-height:1.5;
    margin-bottom:8px;
    
p::first-letter {
  text-transform: uppercase;
}
@media screen and (min-width: 768px){
  margin-right:${props => props.data.marginTablet}
}
@media screen and (min-width: 1440px){
  margin-right:${props => props.data.marginDesktop}
}
`