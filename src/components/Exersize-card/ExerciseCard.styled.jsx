import { styled } from 'styled-components';
export const CardBack = styled.div`
  background-color: #10100f;
  z-index: 11;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 550px;
  width: 700px;
  padding: 48px 32px;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
    height: 788px;
    width: 335px;
    padding: 48px 0 0 0;
  }
`;
export const CardImg = styled.img`
  height: 230px;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const ImagePos = styled.div`
  width: 270px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
`;

export const CircleCountDown = styled.div`
  width: 270px;
  height: 230px;
  border-radius: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const Pshka = styled.p`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const CardListInfo = styled.ul`
  display: flex;
  columns: 2;
  -webkit-columns: 2;

  flex-wrap: wrap;
  list-style: none;
  gap: 8px;
  & li {
    width: 168px;
    background-color: rgba(239, 237, 232, 0.05);
    padding: 18px 12px;
    height: 70px;
    border: 1px solid rgba(239, 237, 232, 0.2);
    border-radius: 12px;

    h5 {
      font-size: 16px;
      color: rgba(239, 237, 232, 1);
    }
    @media screen and (max-width: 768px) {
      width: 147px;
      height: 62px;
      h5 {
        font-size: 14px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardList = styled.div`
  display: flex;
  gap: 16px;
  list-style: none;
  flex-direction: column;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
  }
`;
export const AddButtonPos = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 64px;
  bottom: 64px;

  @media screen and (max-width: 768px) {
    right: auto;
    left: 27%;
    transform: translate(-50%, -50%);
    width: 150px;
    bottom: 16px;
  }
`;
export const CloseButton = styled.svg`
  padding: 0;
  margin: 0;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 16px;
  height: 16px;
  fill: #efede8;
  cursor: pointer;
`;
export const StyledDisableButton = styled.button`
  width: 100%;
  height: 42px;
  margin: 0;
  text-align: center;
  padding: 12px auto;
  border-radius: 12px;
  background: grey;
  opacity: 1;
  border: none;
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  -webkit-transition: all 0.1s linear;
  transition: all 0.1s linear;
  cursor: default;
  @media screen and (min-width: 768px) {
    width: 151px;
    height: 52px;
    line-height: 24px;
  }
`;

export const ListImgTimer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const BurnedPshka = styled.span`
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  margin-top: 8px;
  margin-right: 16px;
  display: flex;
  flex-wrap: nowrap;
  @media screen and (max-width: 768px) {
  }
`;
export const BurnedPshkaCost = styled.p`
  font-size: 12px;
  margin-left: 8px;
  color: #e6533c;
`;

export const ListFlex = styled.ul`
  display: flex;

  justify-content: center;
  gap: 16px;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
