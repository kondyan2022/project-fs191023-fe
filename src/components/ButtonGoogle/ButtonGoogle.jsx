import { Button } from "./ButtonGoogle.styled"
import spriteSvg from '../../images/sprite.svg'

const ButtonGoogle = () => {
    return (
        <Button>
            <a href="https://power-plus-service.onrender.com/users/google">
                <svg>
                    <use href={`${spriteSvg}#icon-google`} />
                </svg>
                <span>Sign in with Google</span>
            </a>
        </Button>
    )
}

export default ButtonGoogle