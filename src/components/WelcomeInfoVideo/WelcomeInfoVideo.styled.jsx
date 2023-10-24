import styled from 'styled-components';

export const CardVideo = styled.div`
  background: #303030;
  width: 146px;
  height: 66px;
  border-radius: 12px;
  padding: 14px 14px 14px 18px;
  position: absolute;
  right: 108px;
  bottom: 186px;

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