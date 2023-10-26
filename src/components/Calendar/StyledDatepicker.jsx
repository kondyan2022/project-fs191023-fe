import { forwardRef, useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import { CalendarGlobalStyles, TitleWrapper } from "./StyledDatepicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";


const StyledDatepicker = () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
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
  });

  return (
    <>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
};

export default StyledDatepicker;