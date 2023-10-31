import styled from 'styled-components'

export const CardVideo = styled.div`
  background: #303030;
  width: 146px;
  height: 66px;
  border-radius: 12px;
  padding: 14px 14px 14px 18px;
  position: absolute;
  right: 82px;
  bottom: 186px;
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    width: 206px;
    height: 96px;
    right: 231px;
    bottom: 214px;
    padding: 20px 36px 20px 23px;
  }
  @media (min-width: 1440px) {
    right: 464px;
    bottom: 321px;
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
`;

