import styled from '@emotion/styled';

export const ActionBlock = styled.div`
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 27px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Recommended = styled.div`
  display: flex;

  p {
    margin: auto 0;
    color: var(--color-white);
    font-size: 12px;
    line-height: 18px;
  }

  div {
    width: 14px;
    height: 14px;
    background-color: ${(props) => (props.isRecomm ? 'green' : 'red')};
    border-radius: 50%;
    margin: auto;
    margin-right: 8px;
  }
`;

export const Diet = styled.div`
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
  width: 41px;
  height: 24px;

  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Button = styled.button`
  color: var(--color-orange);
  background-color: inherit;
  font-size: 14px;
  line-height: 18px;
  /* line-height: 24px; desk */
  display: flex;
  align-items: center;
  padding: 0 2px;

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const Title = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: var(--color-beige);
    border-radius: 50%;
    margin-right: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  p {
    font-size: 20px;
    line-height: 24px;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    p {
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 16px;
  
  li p {
    font-size: 12px;
    line-height: 18px;
    color: rgba(239, 237, 232, 0.4);
    span {
      margin-left: 4px;
      color: var(--color-white);
    }
  }
`;

// hover
