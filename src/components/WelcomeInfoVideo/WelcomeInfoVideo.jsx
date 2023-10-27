import { CardVideo, Circle, Quantity, Text } from "./WelcomeInfoVideo.styled"

const WelcomeInfoVideo = ({ icon, number, value }) => {
    return (
        <CardVideo>
            <Circle>{icon}</Circle>
            <div>
                <Quantity>{number}</Quantity>
                <Text>{value}</Text>
            </div>
        </CardVideo>
    )
}

export default WelcomeInfoVideo