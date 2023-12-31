import styled from '@emotion/styled';


export const Container = styled.div`
    gap:13px;
    margin-bottom:20px;
    display:flex;

    @media screen and (min-width: 375px){
    width: 335px;
    justify-content:center;
}

@media screen and (min-width: 768px){
  flex-direction: column;
   width:593px;
   gap: 16px;
   margin-bottom:32px;
}

@media screen and (min-width: 1440px){
    width:390px;
    margin-bottom:48px;
    flex-direction: initial;
}

`


export const DayStatisticsComponent = styled.ul`
    display:flex;
    gap: 20px;
    flex-direction: column;
    width:100%;


 

    @media screen and (min-width: 768px){
    flex-direction: row;
    width:593px;
    gap: 16px;

}
@media screen and (min-width:  1440px){
    gap: 16px;
    flex-direction: column;
}

`

export const Masseg = styled.div`
    width:100%;
    display:flex;
    margin-bottom:40px;

    @media screen and (min-width: 375px){
      width:335px;
    }

    @media screen and (min-width: 768px){
        width:561px;
    }

    @media screen and (min-width: 1440px){
        width:390px;
        margin:0;
    }

    svg{
        width:24;
        height:24;
        margin-right:8px;
    }
    p{
    width:300px;
    margin:0;
    font-size: 14px;
    line-height: 1.3;
    color:rgba(239, 237, 232, 0.3);

    @media screen and (min-width: 768px){
        font-size: 16px;
        line-height: 1.5;
        width:561px;
    }

    @media screen and (min-width: 1440px){
     text-align: left;
    }
}
` 

export const DescktopStyle = styled.div`
    
    @media screen and (min-width: 768px){
   display:flex;
   flex-direction: column;
    align-items: flex-start;
}
     
    
`

    






