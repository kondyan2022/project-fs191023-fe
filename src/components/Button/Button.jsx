import React from 'react';
import { StyledButton } from '../Button/Button.styled'

const Button = ({ onClick, children, style, primary }) => {
  return (
    <StyledButton onClick={onClick} primary={primary} style={style} type="submit">
      {children}
    </StyledButton>
  );
};

export default Button;
