import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DayProductsComponent = styled.div`

width: 100%;
min-height:355px;
max-height: 824px;
padding-left: 16px;
padding-right:3px;
padding-top:16px;
padding-bottom:16px;


background-color:rgba(239, 237, 232, 0.05);

border-radius: 12px;
border: 1px solid;
gap: 32px;
color:rgba(239, 237, 232, 0.2);
margin-bottom:40px;


@media screen and (min-width: 375px){
  width: 335px;
}

@media screen and (min-width: 768px) {
width:  704px;
min-height: 234px;
padding: 19px 16px;

position: relative;
margin-bottom:32px;
}

@media screen and (min-width: 1440px){
width:  826px;
padding: 16px;


}


`

export const Scroll = styled.div`
  max-height: 755px;
  overflow-y: scroll;
  overflow-x: hidden;
    &::-webkit-scrollbar-thumb {
      background: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
      
      }

    &::-webkit-scrollbar {
      width:6px;
     }

    &::-webkit-scrollbar-track {
      margin-top:25px;
      margin-bottom:40px;
    }
` 


export const Header = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom:22px;
  
`

export const Products = styled.p`

font-family: Roboto;
font-size: 14px;
font-weight: 400;
line-height: 1.3;
`

export const BtnAdd = styled(Link)`
display:flex;


font-family: Roboto;
font-size: 14px;
font-weight: 500;
line-height: 1.2;
color:var(--color-orange);

svg{
  width:16px;
  height:16px;
  margin-left:8px;
}


@media screen and (min-width: 768px){
align-items: center;
font-family: Roboto;
font-size: 16px;
line-height: 1.5;
}


`

export const NotFound = styled.p`
font-size:14px;
line-height:1.2;
color:rgba(239, 237, 232, 0.3);
margin-top: 125px;
text-align:center;


  @media screen and (min-width: 768px){
    margin:0;
    font-size:16px;
    line-height: 1.5;
    position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);}
`



