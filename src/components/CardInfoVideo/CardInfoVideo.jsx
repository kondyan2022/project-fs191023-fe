import { CardVideo, Circle, IconPlayVideoStyled, Wrapper } from "./CardInfoVideo.styled"
import iconSvg from '../../images/sprite.svg'
import { useGetStatsQuery } from '../../redux/features/statsEndpoint'
import Loading from "../Loading/Loading";

const WelcomeInfoVideo = () => {
    const { data } = useGetStatsQuery();

    return (
        <>
            <CardVideo className="first">
                <Circle>
                    <IconPlayVideoStyled>
                        <use href={`${iconSvg}#icon-play`} />
                    </IconPlayVideoStyled>
                </Circle>
                <Wrapper>
                    <span>{data?.videoGuides || <Loading styles={{ width: '28' }} />}</span>
                    <p>Video tutorial</p>
                </Wrapper>
            </CardVideo>

            <CardVideo className="second">
                <Circle>
                    <IconPlayVideoStyled className="user-icon">
                        <use href={`${iconSvg}#icon-user`} />
                    </IconPlayVideoStyled>
                </Circle>
                <Wrapper>
                    <span>{data?.userCount || <Loading styles={{ width: '28' }} />}</span>
                    <p>Users</p>
                </Wrapper>
            </CardVideo>
        </>
    )
}

export default WelcomeInfoVideo