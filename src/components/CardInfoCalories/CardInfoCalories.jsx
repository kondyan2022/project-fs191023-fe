import { CardCalories, Circle, FlexParent, IconRunMenStyled } from "./CardInfoCalories.styled"
import iconSvg from '../../images/sprite.svg'
import { useGetStatsQuery } from '../../redux/features/statsEndpoint'
import Loading from "../Loading/Loading";

const CardInfoCalories = () => {
    const { data } = useGetStatsQuery();

    return (
        <>
            <CardCalories className="first">
                <Circle>
                    <IconRunMenStyled>
                        <use href={`${iconSvg}#icon-run-man`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    <span>{data?.totalBurnedCalories || <Loading />}</span>
                    <p>cal</p>
                </FlexParent>
            </CardCalories>

            <CardCalories className="second">
                <Circle>
                    <IconRunMenStyled>
                        <use href={`${iconSvg}#icon-run-man`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    <span>{data?.countOfExercises || <Loading />}</span>
                    <p>exrs</p>
                </FlexParent>
            </CardCalories>
        </>
    )
}

export default CardInfoCalories