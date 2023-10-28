import styled from '@emotion/styled';

export const CircleColor = styled.span`
width: 14px;
height: 14px;
border-radius: 10px;
margin-right:8px;
background-color: ${props=> props.isRecommended?
'rgba(65, 155, 9, 1)':'rgba(233, 16, 29, 1)'
}

`