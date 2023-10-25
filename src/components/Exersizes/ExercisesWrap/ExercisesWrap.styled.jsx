import styled from '@emotion/styled';
import desktop1x from '../../../images/side-gym-desktop-tab-1x.jpg';
import desktop2x from '../../../images/side-gym-desktop-tab-2x.jpg';

export const ExercisesPageWrap = styled.div`
  /* padding-left: 20px;
  padding-right: 20px; -не нужно, есть общий отступ-Юля Т*/
  margin-top: 40px;
  position: relative;

  @media screen and (min-width: 1440px) {
    margin-top: 72px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ExercisesBox = styled.div`
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 64px;
  }
`;

export const ExercisesTitle = styled.h2`
  @media screen and (max-width: 767.99px) {
    margin-bottom: 20px;
  }
  margin-block: 0;
  color: var(--color-white);
  font-size: 24px;
  font-weight: 700;
  line-height: 1.16;
`;

export const BackgroundImage = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    z-index: -20;
    border: none;
    outline: none;
    position: absolute;
    top: 82px;
    transform: translateX(120%);
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
