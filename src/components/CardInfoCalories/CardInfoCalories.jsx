import { CardCalories, Circle, FlexParent, IconRunMenStyled, Span } from "./CardInfoCalories.styled"
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
                    {data
                        ? (<><span>{isReachedGoal
                            ? data?.totalBurnedCalories.toString().substring(0, 2) + 'k'
                            : data?.totalBurnedCalories
                        }
                        </span>
                            <p>cal</p></>
                        ) : (<Span><Loading /></Span>)}
                </FlexParent>
            </CardCalories>

            <CardCalories className="second">
                <Circle>
                    <IconRunMenStyled>
                        <use href={`${iconSvg}#icon-run-man`} />
                    </IconRunMenStyled>
                </Circle>
                <FlexParent>
                    {data
                        ? (<>
                            <span>{data?.countOfExercises}</span>
                            <p>exrs</p></>
                        ) : (<Span><Loading /></Span>)
                    }
                </FlexParent>
            </CardCalories>
        </>
    )
}

export default CardInfoCalories