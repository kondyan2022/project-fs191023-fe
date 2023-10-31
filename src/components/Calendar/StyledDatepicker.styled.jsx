import { createGlobalStyle, styled } from 'styled-components';

export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    display: flex;
    position: relative;
   
  }
  .react-datepicker {
    ${'' /* position: relative; */}
    
     ${
       '' /* left: 50%;
    top: 50%; */
     }
  
   /* transform: translate(-1%, 0%); */
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px;
    height: 263px;
    padding: 14px;
    background-color: var(--color-orange-one);
    font-family: Roboto;
    border-radius: 8px;
  }
  
  .react-datepicker__tab-loop{
    position: absolute;
    top:0px;
    left:0px;
    @media screen and (min-width: 768px) {
      top:0px;
      left:0px;
    }
    @media screen and (min-width: 1440px) {
      ${
        '' /* top:-50px;
      left:-400px; */
      }
    }
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    width: 187px;
    height: 161px;
    padding-bottom: 5px;
  }
  .react-datepicker__header {
    position: relative;
    background-color: var(--color-orange-one);
    width: 187px;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1px 1px;
    color:rgba(239, 237, 232, 0.50);
    border-top: 1px solid var(--accent-color-border);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    ${'' /* line-height: 16px; */}
    text-align: center;
    color: var(--color-white);
    padding-bottom: 10px;
    display: inline-flex;
  }
  .react-datepicker__day-name {
    margin-top: 14px;
    padding: 1px 1px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: rgba(239, 237, 232, 0.5);
  }
  .react-datepicker__navigation {
    margin-top: 14px;
    color: var(--color-white);
    fill:var(--color-white);
  }

  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
    margin-left: 10px;
    fill:var(--color-white);
    color: var(--color-white);
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
    margin-left: 10px;
    fill:var(--color-white);
    color: var(--color-white);
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: rgba(239, 237, 230, 0.4);
    /*background-image: url('public/calendar-icon.svg#icon-arrow-left')*/
    fill:rgba(239, 237, 232, 0.6);
  } 
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    margin: 0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: var(--color-white);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: var( --color-black);
    color:var(--color-white);
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: var( --color-black);
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:var( --color-black);
    color:var(--color-white);
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:var( --color-black);
    color: var(--color-white);
  }
  ${
    '' /* .react-datepicker__day--weekend {
    opacity: 50%;
  } */
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  height: 20px;
  width: 183px;
  color: var(--color-white);
  background: transparent;
  font-weight: 700;
  line-height: 1, 05;
  text-transform: uppercase;
  padding: 0px 0px;
  font-size: 18px;
  align-items: left;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 32px;
    width: 239px;
    line-height: 32px;
    font-size: 24px;
  }

  .react-datepicker__containet-bottom {
    width: 125px;
    @media screen and (min-width: 768px) {
      width: 161px;
    }
  }

  .react-datepicker__calendar-icon {
    --color1: var(--color-orange-one);
    margin-left: 8px;
    margin-right: auto;
    width: 20px;
    height: 20px;
    padding: 0px;
    position: initial;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
    }
  }

  .react-datepicker__navigation-title-day--next {
    width: 16px;
    height: 16px;
    --color2: var(--color-white);
  }
  .react-datepicker__navigation-title-day--previous {
    width: 16px;
    height: 16px;
    --color2: var(--color-white);
  }
`;
export const BirthdayCalendarWrapper = styled(TitleWrapper)`
  width: 100%;
  color: var(--color-white);
  background: transparent;
  font-weight: 400;
  line-height: 24 px;
  text-transform: uppercase;
  padding: 0px 0px;
  font-size: 16px;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  text-align: center;

  .react-datepicker__calendar-icon {
    --color1: var(--color-white);
    width: 18px;
    height: 18px;
    padding: 0px;
    position: initial;
  }
`;
