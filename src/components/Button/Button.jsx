import React from 'react';
import { StyledButton } from '../Button/Button.styled';

const Button = ({ onClick, children, style, primary,home, type, isLoading }) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';

  return (
    <StyledButton 
    onClick={onClick} 
    primary={primary} 
    home={home} 
    style={style} 
    type={buttonType} 
    disabled={isLoading}
    className={isLoading && 'disabled'}>
      {children}
    </StyledButton>

  );
};

export default Button;
