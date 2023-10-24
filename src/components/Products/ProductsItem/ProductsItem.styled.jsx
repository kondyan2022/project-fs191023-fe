import styled from '@emotion/styled';

export const ActionBlock = styled.div`
  margin-bottom: 27px;
  display: flex;
  align-items: center;
`;

export const Recommended = styled.div`
  display: flex;
  margin-left: ${(props) => (props.isRecomm ? '160px' : '140px')};

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
  line-height: 24px;
  display: flex;
  align-items: center;
  padding: 0 2px;
  margin-left: 12px;
  /* padding: 0; */

  svg {
    width: 16px;
    height: 16px;
    margin-left: 8px;
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
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }
`;

export const DetailsList = styled.ul`
  display: flex;
  gap: 16px;
  font-size: 12px;
  line-height: 18px;

  li p {
    color: rgba(239, 237, 232, 0.4);
    span {
      margin-left: 4px;
      color: var(--color-white);
    }
  }
`;
