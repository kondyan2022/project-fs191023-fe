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
    position: relative;

  }
  .react-datepicker {
    position: relative;
    left: 50%;
    top: 50%;
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
    color:rgba(255, 255, 255, 0.5);
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
    font-weight: 400;
    line-height: 16px;
    text-align: center;
    color: var(--color-white);
    padding-bottom: 10px;
    display: inline-flex;
    display:none;
  }
  .react-datepicker__day-name {
    margin: 0;
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
    display:none;
  }

  .react-datepicker__navigation--previous {
<<<<<<< Updated upstream
    left: 7px;
    width: 18px;
    height: 18px;
    margin-left: 10px;
    fill:var(--color-white);
    color: var(--color-white);
    display:none;
=======
  
>>>>>>> Stashed changes
  }
  .react-datepicker__navigation--next {
   
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
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: white;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
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
  .react-datepicker__day--weekend {
    opacity: 50%;
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

  .react-datepicker__year-read-view{
    color: var(--color-white);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .react-datepicker__month-read-view{
    color: var(--color-white);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .react-datepicker__month-dropdown{
    background: var(--color-beige);
    color: var (--color-white);
  }
  .react-datepicker__year-option{
    color: var (--color-white);
    font-family: Roboto;
    font-weight: 400;
  }
`;

export const TitleWrapper = styled.button`
  width: 133px;
  color: var(--color-white);
  background: transparent;
  font-weight: 400;
  line-height: 18px;
  /*text-transform: uppercase;*/
  padding: 0px 0px;
  font-size: 14px;
  align-items: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  align-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 159px;
    line-height: 24px;
    font-size: 16px;
  }
  .birthday-calendar-icon{
    margin-left: 34px;
    @media screen and (min-width: 768px) {
      margin-left: 60px;
    }

  }
`;