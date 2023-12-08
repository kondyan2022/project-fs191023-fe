import styled from '@emotion/styled';

export const OrangCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 96px;
  padding: 14px;
  background-color: var(--color-orange);

  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);

  @media screen and (min-width: 375px) {
    width: 157px;
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }

  p {
    font-size: 12px;
    line-height: 1.3;
    color: rgba(239, 237, 232, 0.8);
    margin: 0;
  }
`;

export const GreyCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 96px;
  padding: 14px;
  background-color: rgba(239, 237, 232, 0.05);

  border-radius: 12px;
  border: 1px solid;
  border-color: rgba(239, 237, 232, 0.2);

  :last-child {
    border-color: ${(props) =>
      props.isSport ? props.normDone.sport : props.normDone.calory};
  }

  font-size: 12px;
  line-height: 1.3;
  color: #efede8cc;
  text-align: right;

  @media screen and (min-width: 375px) {
    width: 157px;
  }
  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
  }

  div {
    display: flex;
    align-items: center;
    text-align: left;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: #ef8964;
  }

  p {
    font-size: 12px;
    line-height: 1.3;
    color: rgba(239, 237, 232, 0.4);
    margin: 0;
  }
`;

export const Number = styled.div`
  color: var(--color-white);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
`;
