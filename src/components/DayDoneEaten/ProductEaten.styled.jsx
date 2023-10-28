import styled from '@emotion/styled';

export const AllData = styled.div`

/* button{
    background-color: transparent;
    margin-left:8px;
    padding:0px;
    margin-bottom:9px;

    @media screen and (min-width: 768px){
      margin-left:4px;
      margin-bottom:0px;
    }

} */
    
`

export const NamOfCategory = styled.p`
    color:var( --color-orange-one);
    font-size:12px;
    line-height:1.5;
    margin-bottom:8px;
    
p::first-letter {
  text-transform: uppercase;
}
`
 

export const TitleCategory = styled.div`

width:100%;
margin-bottom:16px;

@media screen and (min-width: 375px){
  width: 297px;
}

div{

max-width: 297px;
height:38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);


font-size:14px;
line-height:1.3;
color:var(--color-white);

@media screen and (min-width: 375px){
  width: 297px;
}
}
div::first-letter {
  text-transform: uppercase;
}
`
export const Container = styled.div`
    display:flex;
    align-items: flex-end;
`
export const OtherData = styled.div`
    display:flex; 
    gap: 16px;
    

div{

max-width: 81px;
height:38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);


font-size:14px;
line-height:1.3;
color:var(--color-white);

@media screen and (min-width: 375px){
  width: 81px;
}
}
`

export const RecommendDiv = styled.div`
display:flex;
text-align:center;
align-items:center;
width: 81px;
height:38px;
padding: 10px 14px;
border-radius: 12px;
border: 1px solid;
border-color:rgba(239, 237, 232, 0.3);


font-size:14px;
line-height:1.3;
color:var(--color-white); 
`

// export const Circle = styled.span`
// width: 14px;
// height: 14px;
// border-radius: 10px;
// margin-right:8px;
// background-color: ${props=> props.isRecommended? 'rgba(65, 155, 9, 1)':'rgba(233, 16, 29, 1)'}

// `






