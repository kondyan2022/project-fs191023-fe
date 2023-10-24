import { CardCalories } from "./WelcomeInfoCalories.styled"

const WelcomeInfoCalories = ({ icon, number, value }) => {
    return (
        <CardCalories>
            <div>{icon}</div>
            <div>
                <span>{number}</span>
                <p>{value}</p>
            </div>
        </CardCalories>
    )
}

export default WelcomeInfoCalories