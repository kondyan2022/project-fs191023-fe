import styled from 'styled-components';
import desktop1x from '../../../images/side-gym-desktop-tab-1x.jpg';
import desktop2x from '../../../images/side-gym-desktop-tab-2x.jpg';
export const ExList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: auto;
    gap: 32px 16px;
    max-width: 100%;
    max-height: 726px;
    padding-right: 10px;
    &::-webkit-scrollbar-thumb {
      background-color: #ef8964;
      border-radius: 12px;
    }

    &::-webkit-scrollbar {
      width: 8px;
      height: 153px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(255, 186, 12);
      border-radius: 12px;
    }
  }

  @media screen and (min-width: 1440px) {
    overflow-y: auto;
    max-height: 487px;
    padding-right: 16px;
    width: 850px;
  }
`;
export const BackgroundImage = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    z-index: -20;
    border: none;
    outline: none;
    position: absolute;
    transform: translateX(130%);
    top: 80px;
    /* top: 84px;
    right: 96px; */
    width: 670px;
    height: 902px;
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url(${desktop1x});
    background-repeat: no-repeat;
    background-position: 100% 0;
    @media (min-device-pixel-ratio: 2) {
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
        background-image: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url(${desktop2x});
      }
    }
  }
`;
