import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ExCard = styled(Link)`
  /* display: flex; */
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const ExCardImage = styled.img`
  display: block;
  border: 1px #efede8;
  border-radius: 12px;
  filter: brightness(40%);
  overflow: hidden;
  width: 335px;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  }

  @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  }
`;

export const ExCardData = styled.div`
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

export const ExCardTitle = styled.h3`
  color: var(--color-white);
  font-size: 20px;
  /* font-weight: 400; */
  line-height: 1.2;
  margin: 0;
`;

export const ExCardText = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  /* font-weight: 400; */
  line-height: 1.5;
  margin: 0;
`;
