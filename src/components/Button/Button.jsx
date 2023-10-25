import React from 'react';
import { StyledButton } from '../Button/Button.styled';

const Button = ({ onClick, children, style, primary, type }) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';

  return (
    <StyledButton onClick={onClick} primary={primary} style={style} type={buttonType}>
      {children}
    </StyledButton>
  );
};

export default Button;
