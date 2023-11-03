import { CardVideo, Circle, IconPlayVideoStyled, Wrapper } from "./CardInfoVideo.styled"
import iconSvg from '../../images/sprite.svg'
import { useGetStatsQuery } from '../../redux/features/statsEndpoint'
import Loading from "../Loading/Loading";

const WelcomeInfoVideo = () => {
    const { data } = useGetStatsQuery();

    // console.log(data)
    // countOfExercises: 129
    // totalBurnedCalories: 8932
    // totalExercisesTime: 104
    // userCount: 60
    // videoGuides: 1324

    return (
        <>
            <CardVideo className="first">
                <Circle>
                    <IconPlayVideoStyled>
                        <use href={`${iconSvg}#icon-play`} />
                    </IconPlayVideoStyled>
                </Circle>
                <Wrapper>
                    <span>{data?.videoGuides || <Loading />}</span>
                    <p>Video tutorial</p>
                </Wrapper>
            </CardVideo>

            <CardVideo className="second">
                <Circle>
                    <IconPlayVideoStyled>
                        <use href={`${iconSvg}#icon-user`} />
                    </IconPlayVideoStyled>
                </Circle>
                <Wrapper>
                    <span>{data?.userCount || <Loading />}</span>
                    <p>Users</p>
                </Wrapper>
            </CardVideo>
        </>
    )
}

export default WelcomeInfoVideo