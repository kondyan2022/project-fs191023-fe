import { CardVideo } from "./WelcomeInfoVideo.styled"

const WelcomeInfoVideo = ({ icon, number, value }) => {
    return (
        <CardVideo>
            <div>{icon}</div>
            <div>
                <span>{number}</span>
                <p>{value}</p>
            </div>
        </CardVideo>
    )
}

export default WelcomeInfoVideo