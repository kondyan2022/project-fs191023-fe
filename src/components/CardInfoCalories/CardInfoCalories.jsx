import { CardCalories, Circle, FlexParent, IconRunMenStyled } from "./CardInfoCalories.styled"
import iconSvg from '../../images/sprite.svg'

const CardInfoCalories = () => {
    return (
        <CardCalories>
            <Circle>
                <IconRunMenStyled>
                    <use href={`${iconSvg}#icon-run-man`} />
                </IconRunMenStyled>
            </Circle>
            <FlexParent>
                <span>500</span>
                <p>cal</p>
            </FlexParent>
        </CardCalories>
    )
}

export default CardInfoCalories