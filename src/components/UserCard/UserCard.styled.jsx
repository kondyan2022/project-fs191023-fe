import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    margin-top: 64px;
  }
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  margin-top: 40px;
  border-radius: 100px;
  border: 1px solid #e6533c;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const Photo = styled.img`
  border-radius: 100px;
`;

export const SvgLogoUser = styled.svg`
  @media screen and (min-width: 768px) {
    width: 102px;
    height: 102px;
  }
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const IconBtn = styled.svg`
  width: 24px;
  height: 24px;
  position: relative;
  top: -13px;
  left: 0px;
  /* z-index: 1; */

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    top: -17.5px;
  }
`;

export const TitleName = styled.p`
  color: #efede8;

  @media screen and (min-width: 768px) {
    font-family: 'Roboto';
    font-size: 24px;
    line-height: 28px;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--accent-color-grey);
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const WrapperDaily = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  margin-top: 40px;

  @media screen and (max-width: 320px) {
    display: grid;
    grid-template-columns: 157px 165px;
    justify-content: flex-start;
  }
`;
