import styled from 'styled-components'
// import imageLarge1x from '../../images/side-gym-desktop-tab-1x.jpg'
// import imageLarge2x from '../../images/side-gym-desktop-tab-2x.jpg'
// import image1x from '../../images/side-gym-mob-1x.jpg'
// import image2x from '../../images/side-gym-mob-2x.jpg'
import Button from '../../components/Button/Button'


export const MainWrapper = styled.div`
    /* width: 406px; // 446px; */
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

export const ButtonStyled = styled(Button)`
    border: 1px solid var(--accent-color-grey);
`