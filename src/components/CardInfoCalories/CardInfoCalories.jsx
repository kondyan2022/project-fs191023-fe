import { CardCalories, Circle, FlexParent, IconRunMenStyled } from "./CardInfoCalories.styled"
import iconSvg from '../../images/sprite.svg'
import { useGetStatsQuery } from '../../redux/features/statsEndpoint'
import Loading from "../Loading/Loading";
import { useState } from "react";

const CardInfoCalories = () => {
    const { data } = useGetStatsQuery();

    const [isReachedGoal, setIsReachedGoal] = useState(false);
    if (data?.totalBurnedCalories >= 10000 && !isReachedGoal) {
        setIsReachedGoal(true);
    }

    return (
        <>
            <CardCalories className="first">
                <Circle>
                    <IconRunMenStyled className="fire-icon">
                        <use href={`${iconSvg}#icon-fire`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    <span>
                        {(isReachedGoal
                            ? (data?.totalBurnedCalories.toString().substring(0, 2) + 'k')
                            : data?.totalBurnedCalories)
                            || (<Loading styles={{ width: '28' }} />)}
                    </span>
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
                    <span>{data?.countOfExercises || <Loading styles={{ width: '28' }} />}</span>
                    <p>exrs</p>
                </FlexParent>
            </CardCalories>
        </>
    )
}

export default CardInfoCalories