import React, { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper } from "./StyledDatepicker.styled";
import "react-datepicker/dist/react-datepicker.css";
import sprite from '../../images/sprite.svg';



const StyledDatepicker = ({ minDate, maxDate, disabledDates }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = ({ onClick }) => {
    return (
      <TitleWrapper>        
        <div onClick={onClick}>
          {format(selectedDate, "dd/MM/yyyy")}   
          <svg width="24" height="24"
            className="react-datepicker__calendar-icon"
            style={{
                stroke: 'var(--color1)'                
              }}>
              <use href={sprite + '#icon-calendar'} ></use>
        </svg>      
        </div>
        
        <div className="react-datepicker__navigation-title-day">
          <span onClick={handlePrevDay} className="react-datepicker__navigation-title-day--previous">&lt;</span>
          <span onClick={handleNextDay} className="react-datepicker__navigation-title-day--next">&gt;</span>
        </div>
        
      </TitleWrapper>

      
    );
  };

  const handlePrevDay = () => {
    const prevDay = subDays(selectedDate, 1);
    if (minDate && prevDay < minDate) {
      return;
    }
    setSelectedDate(prevDay);
  };

  const handleNextDay = () => {
    const nextDay = addDays(selectedDate, 1);
    if (maxDate && nextDay > maxDate) {
      return;
    }
    setSelectedDate(nextDay);
  };

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          if (minDate && date < minDate) {
            return;
          }
          if (maxDate && date > maxDate) {
            return;
          }
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        excludeDates={disabledDates}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;