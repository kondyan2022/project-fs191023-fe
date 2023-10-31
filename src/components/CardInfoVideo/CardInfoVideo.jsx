import { CardVideo, Circle, IconPlayVideoStyled, Wrapper } from "./CardInfoVideo.styled"
import iconSvg from '../../images/sprite.svg'

const WelcomeInfoVideo = () => {
    return (
        <CardVideo>
            <Circle>
                <IconPlayVideoStyled>
                    <use href={`${iconSvg}#icon-play`} />
                </IconPlayVideoStyled>
            </Circle>
            <Wrapper>
                <span>350+</span>
                <p>Video tutorial</p>
            </Wrapper>
        </CardVideo>
    )
}

export default WelcomeInfoVideo