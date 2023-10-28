import { CardCalories, Circle, FlexParent, Quantity, Text } from "./WelcomeInfoCalories.styled"

const WelcomeInfoCalories = ({ icon, number, value }) => {
    return (
        <CardCalories>
            <Circle>{icon}</Circle>
            <FlexParent>
                <Quantity>{number}</Quantity>
                <Text>{value}</Text>
            </FlexParent>
        </CardCalories>
    )
}

export default WelcomeInfoCalories