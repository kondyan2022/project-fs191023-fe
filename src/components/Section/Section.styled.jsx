import styled from 'styled-components'
import imageLarge1x from '../../images/side-gym-desktop-tab-1x.jpg'
import imageLarge2x from '../../images/side-gym-desktop-tab-2x.jpg'
import image1x from '../../images/side-gym-mob-1x.jpg'
import image2x from '../../images/side-gym-mob-2x.jpg'

// section with background image >>
export const Section = styled.div`
    width: 375px;
    height: 812px;  // header 61px
    margin: 0 auto;
    padding-top: 127px;
    padding-bottom: 483px;
    background-image: url(${image1x});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: 100%;
    position: relative;
    @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
        background-image: url(${image2x});
    }

    @media (min-width: 768px) {
    width: 768px;
    padding-top: 189px;
    padding-bottom: 481px;
    height: 1024px;  // header 84px
    background-image: url(${imageLarge1x});
    }

    @media (min-width: 768px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi),
    (min-width: 768px) and (min-resolution: 2dppx) {
        background-image: url(${imageLarge2x});
    }

    @media (min-width: 1440px) {
    width: 1440px;
    height: 800px; // header 84px
    padding-top: 200px;
    padding-bottom: 246px;
    }
`