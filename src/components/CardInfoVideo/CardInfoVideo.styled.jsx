import styled, { keyframes } from 'styled-components'

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const CardVideo = styled.div`
  background: #303030;
  width: 146px;
  height: 66px;
  border-radius: 12px;
  padding: 14px 14px 14px 18px;
  position: absolute;
  right: 15px;
  bottom: 150px;
  display: flex;
  align-items: center;
  gap: 8px;

  animation: ${fadeInOut} 20s ease-in-out infinite;
  opacity: 0;

  @media (min-width: 768px) {
    width: 206px;
    height: 96px;
    right: 240px;
    bottom: 290px;
    padding: 20px 36px 20px 23px;
  }
  @media (min-width: 1440px) {
    right: 445px;
    bottom: 330px;
  }

  &:nth-child(odd) {
    animation-delay: 10s;
  }
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-beige);
  position: relative; 
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  span {
    color: var(--color-white);
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 4px;
    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 1;
      margin-bottom: 8px;
    }
    /* @media(max-width: 767px) {
      position: absolute;
      top: -20px;
      left: -7px;
    } */
  }
  p {
    color: rgba(239, 237, 232, 0.65);
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 16px;
      }
  }
`;

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

  &.user-icon {
    width: 12px;
    height: 12px;
    bottom: 9px;
    left: 8.5px;
    @media(min-width: 768px) {
      width: 20px;
      height: 20px;
      bottom: 9.5px;
      left: 10px;
    }
  }
`;

export const Span = styled.span`
  @media(max-width: 767px) {
    position: absolute;
    top: -20px;
    left: -7px;
  }

`