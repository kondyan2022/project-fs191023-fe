import { RotatingLines } from 'react-loader-spinner';
import { SpinnerWrap, StyledButton } from '../Button/Button.styled';

const Button = ({
  onClick,
  children,
  style,
  primary,
  home,
  type,
  isLoading,
  isFetching,
}) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';

  return (
    <StyledButton
      onClick={onClick}
      primary={primary}
      home={home}
      style={style}
      type={buttonType}
      disabled={isLoading}
      className={isLoading && 'disabled'}
    >
      {isFetching && (
        <SpinnerWrap>
          <RotatingLines
            strokeColor="#e6533c"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={true}
          />
        </SpinnerWrap>
      )}
      {children}
    </StyledButton>
  );
};

export default Button;
