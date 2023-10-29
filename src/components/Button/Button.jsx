import React from 'react';
import { StyledButton } from '../Button/Button.styled';

const Button = ({ onClick, children, style, primary, type, isLoading }) => {
  const buttonType = type === 'submit' ? 'submit' : 'button';

  return (
    <StyledButton 
    onClick={onClick} 
    primary={primary} 
    style={style} 
    type={buttonType} 
    disabled={isLoading}
    className={isLoading && 'disabled'}>
      {isLoading ? 'Loading...' : children}
    </StyledButton>

  );
};

export default Button;
