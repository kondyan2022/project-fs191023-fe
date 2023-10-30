import { FallingLines } from 'react-loader-spinner'

const Loading = ({ styles }) => {
    return (
        <div style={styles}>
            <FallingLines
                color="#e6533c"
                width="40"
                visible={true}
                ariaLabel='falling-lines-loading'
            />
        </div>
    )
}

export default Loading

// Please add styles in special props -> <Loading styles={{ position: 'absolute', top: "-45px" }} />