import styled from '@emotion/styled';

export const ScrollContainer = styled.div`
  max-height: 760px;
  overflow-y: auto;
  &::-webkit-scrollbar-thumb {
      background: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
      
      }
  &::-webkit-scrollbar {
      width:6px;
      height:90px;
     }
     &::-webkit-scrollbar-track {
      margin-top:5px;
      margin-bottom:7px;
    }


@media screen and (min-width: 768px){
  max-height: 140px;
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
  max-width:78px;
  overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
  margin-right:${props => props.data.marginTablet}
}
@media screen and (min-width: 1440px){
  margin-right:${props => props.data.marginDesktop}
}
`