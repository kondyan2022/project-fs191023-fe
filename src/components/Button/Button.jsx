import React from 'react';
import { StyledButton } from '../Button/Button.styled'

const Button = ({ onClick, children, style, primary }) => {
  return (
    <StyledButton onClick={onClick} primary={primary} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
