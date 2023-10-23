import styled from 'styled-components'
import imageLarge1x from '../../images/side-gym-desktop-tab-1x.jpg'
import imageLarge2x from '../../images/side-gym-desktop-tab-2x.jpg'
import image1x from '../../images/side-gym-mob-1x.jpg'
import image2x from '../../images/side-gym-mob-2x.jpg'


export const MainWrapper = styled.div`
    /* width: 406px; // 446px; */
    width: 100%;
    height: 812px;  // header 61px
    background-image: url(${image1x});
    background-size: auto;
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
    /* width: 704px;// 768px; */
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
    /* width: 1248px;// 1440px; */
    height: 800px; // header 84px
    }
`

export const Wrapper = styled.div`
    max-width: 240px;
    height: 100%;
    background-color: var(--color-orange);
    position: absolute;
    left: -20px;
    padding: 250px 20px;

    @media (min-width: 768px) {
    max-width: 420px;
    left: -32px;
    padding: 309px 32px;
    }
    @media (min-width: 1440px) {
    max-width: 669px;
    left: -96px;
    padding: 221px 96px;
    }
`

export const Title = styled.h1`
    margin-bottom: 14px;

    @media (min-width: 768px) {
    margin-bottom: 28px;

    }
    /* @media (min-width: 1440px) {
    } */
`

export const Subtitle = styled.h3`
    margin-bottom: 28px;

    /* @media (min-width: 768px) {

    }
    @media (min-width: 1440px) {
    } */
`