import { CardVideo, Circle, IconPlayVideoStyled, Span, Wrapper } from "./CardInfoVideo.styled"
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
                    {data
                        ? (<>
                            <span>{data?.videoGuides}</span>
                            <p>Video tutorial</p></>
                        ) : (<Span><Loading /></Span>)
                    }
                </Wrapper>
            </CardVideo>

            <CardVideo className="second">
                <Circle>
                    <IconPlayVideoStyled className="user-icon">
                        <use href={`${iconSvg}#icon-user`} />
                    </IconPlayVideoStyled>
                </Circle>
                <Wrapper>
                    {data
                        ? (<>
                            <span>{data?.userCount}</span>
                            <p>Users</p></>
                        ) : (<Span><Loading /></Span>)
                    }
                </Wrapper>
            </CardVideo>
        </>
    )
}

export default WelcomeInfoVideo