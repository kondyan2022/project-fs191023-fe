import { ExCard, ExCardData, ExCardImage, ExCardText, ExCardTitle } from "./ExercisesCard.styled"

export const ExercisesCard = ({ exercisesCard, handleBoardClick, handleExNameClick }) => {
    const { name, filter, imgURL } = exercisesCard
    
    const onClick = name => {
        handleBoardClick(name)
        handleExNameClick(name)
    }
    
    const capitalizeFirstLeter = string => {
        const newString = string.slice(0, 1).toUpperCase() + string.slice(1)
        return newString
    }

    return (
        <ExCard
            to={`groups/${exercisesCard._id.$oid}`}
            onClick={() => onClick(name)}>
            <ExCardImage src={imgURL} alt={name} />
            <ExCardData>
                <ExCardTitle>{capitalizeFirstLeter(name)}</ExCardTitle>
                <ExCardText>{filter}</ExCardText>
            </ExCardData>
        </ExCard>
    )
}