
const StatisticsInfoCard = ({ icon, number, value }) => {
    return (
        <div>
            <div>{icon}</div>
            <div>
                <span>{number}</span>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default StatisticsInfoCard