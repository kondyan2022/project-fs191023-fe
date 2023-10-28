import styled from 'styled-components'

export const CardVideo = styled.div`
  background: #303030;
  width: 146px;
  height: 66px;
  border-radius: 12px;
  padding: 14px 14px 14px 18px;
  position: absolute;
  right: 108px;
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
    bottom: 373px;
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
`

export const Quantity = styled.div`
  color: var(--color-white);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 0.88;
  letter-spacing: -1px;
  margin-bottom: 4px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  margin-bottom: 8px;
  }
`

export const Text = styled.div`
  color: rgba(239, 237, 232, 0.65);
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 0.75;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 0.66;
    }
`