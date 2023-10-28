import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 80px;
  
  @media screen and (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
  }
  `;

export const Title = styled.h2`
  margin-bottom: 40px;
  color: var(--color-white);
  font-size: 24px;
  line-height: 28px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 28px;
    display: flex;
    justify-content: space-between;
  }
`;

// @media screen and (min-width: 768px) {
//   }

//   @media screen and (min-width: 1440px) {
    
//   }
