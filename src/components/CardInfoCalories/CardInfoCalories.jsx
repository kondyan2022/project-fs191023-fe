import { CardCalories, Circle, FlexParent, IconRunMenStyled } from "./CardInfoCalories.styled"
import iconSvg from '../../images/sprite.svg'
import { useGetStatsQuery } from '../../redux/features/statsEndpoint'

const CardInfoCalories = () => {
    const { data } = useGetStatsQuery();

    return (
        <>
            <CardCalories className="active">
                <Circle>
                    <IconRunMenStyled>
                        <use href={`${iconSvg}#icon-run-man`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    <span>{data?.totalBurnedCalories}</span>
                    <p>cal</p>
                </FlexParent>
            </CardCalories>

            {/* <CardCalories className="hidden">
                <Circle>
                    <IconRunMenStyled>
                        <use href={`${iconSvg}#icon-run-man`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    <span>{data?.countOfExercises && '150'}</span>
                    <p>exrs</p>
                </FlexParent>
            </CardCalories> */}
        </>
    )
}

export default CardInfoCalories