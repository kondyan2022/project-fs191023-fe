import styled from 'styled-components'
import imageLarge1x from '../../images/side-gym-desktop-tab-1x.jpg'
import imageLarge2x from '../../images/side-gym-desktop-tab-2x.jpg'
import image1x from '../../images/side-gym-mob-1x.jpg'
import image2x from '../../images/side-gym-mob-2x.jpg'
import imageTab1x from '../../images/side-gym-tablet-1x.jpg'
import imageTab2x from '../../images/side-gym-tablet-2x.jpg'


// section with background image >>
export const SectionWrapper = styled.div`
    width: 100%;
    max-width: 375px;
    height: 100%;
    max-height: 812px;
    margin: 0 auto;
    background-image: url(${image1x});
    background-size: inherit;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    position: relative;
    
    @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
            background-image: url(${image2x});
        }

    @media (min-width: 768px) {
        max-width: 768px;
        max-height: 1024px; 
        background-image: url(${imageTab1x});
    }

    @media (min-width: 768px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: url(${imageTab2x});
    }

    @media (min-width: 1440px) {
        max-width: 1440px;
        max-height: 800px;
        background-image: url(${imageLarge1x});
        background-size: contain;
        background-position: 100% 100%;
    }

    @media (min-width: 1440px) and (min-device-pixel-ratio: 2),
        (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
        (min-width: 768px) and (min-resolution: 192dpi),
        (min-width: 768px) and (min-resolution: 2dppx) {
            background-image: url(${imageLarge2x});
    }
`