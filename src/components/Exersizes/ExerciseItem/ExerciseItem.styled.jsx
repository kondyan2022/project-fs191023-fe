import styled from 'styled-components';
export const ListItem = styled.li`
  width: 100%;
  min-height: 141px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 335px;
    height: 163px;
  }
  @media screen and (min-width: 1440px) {
    width: 405px;
    min-height: 141px;
  }
`;

export const Workout = styled.strong`
  border-radius: 4px;
  color: #fff;
  background-color: rgba(239, 237, 232, 0.05);
  padding: 5px 7.5px 5px 7.5px;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 700;

  margin-bottom: 33px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 27px;
  }
`;
export const TitleBlock = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
export const Title = styled.p`
  color: #efede8;
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 'calc(24px / 20px)';
  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32px / 24px);
  }
`;
export const IconWraper = styled.span`
  width: 28px;
  height: 28px;
  margin-right: 16px;
  background-color: #efa082;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
export const Statistics = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StatData = styled.p`
  display: inherit;
  color: rgba(239, 237, 232, 0.4);
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 'calc(18px / 12px)';
  margin-right: 16px;
`;
export const Button = styled.button`
  background-color: transparent;
  color: #e6533c;
  border: none;
  padding: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 'calc(18px / 14px)';
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 'calc(24px / 16px)';
  }
`;
export const Span = styled.span`
  color: #efede8;
  margin-left: 3px;
`;
