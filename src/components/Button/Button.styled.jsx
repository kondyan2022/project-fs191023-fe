import styled from '@emotion/styled';

export const buttonStyles = {
  common: {
    color: 'var(--color-white)',
    borderRadius: '12px',
    
    fontFamily: 'Roboto',
    fontWeight: 500,
    letterSpacing: '0em',
    fontSize: '16px',
    lineHeight: '18px',
    padding: '12px 40px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    extOverflow: 'ellipsis',
  },
  primaryButtonStyles: {
    backgroundColor: 'var(--color-orange)',
    '&:hover': {
      backgroundColor: 'var(--color-orange-one)',
    },
  },
  secondaryButtonStyles: {
    background: 'transparent',
    border: '1px solid var(--accent-color-grey)',
    '&:hover': {
      border: '1px solid var(--color-orange)',
    },
  },
};

export const StyledButton = styled.button`
  ${() => buttonStyles.common};
  ${(props) =>
    props.primary
      ? buttonStyles.primaryButtonStyles
      : buttonStyles.secondaryButtonStyles};

  @media (min-width: 375px) and (max-width: 768px) {
    width: ${(props) => (props.primary ? '136px' : '130px')};
    font-size: 16px;
    line-height: 18px;
    padding: 12px 40px;
  }

  @media (min-width: 768px) {
    width: 190px;
    font-size: 20px;
    line-height: 24px;
    padding: 16px 60px;
  }
`;
