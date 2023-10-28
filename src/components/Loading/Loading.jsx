import { FallingLines } from 'react-loader-spinner'

const Loading = ({ styles }) => {
    return (
        <div style={styles}>
            <FallingLines
                color="#e6533c"
                width="50"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    )
}

export default Loading

// <Loading styles={{ position: 'absolute', top: "-45px" }} />