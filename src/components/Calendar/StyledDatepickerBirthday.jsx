import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import sprite from '../../images/sprite.svg';

const StyledDatepickerBirthday = ({ minDate, maxDate, disabledDates }) => {
const [selectedDate, setSelectedDate] = useState(Date.now);

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
        dateFormat={"dd/MM/yyyy"}
        customInput={
        <CustomInput
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
        />
        }
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        excludeDates={disabledDates}
        showYearDropdown // Дозволити вибір року
    />
    </>
);
};

const CustomInput = ({ selectedDate, setSelectedDate }) => {
return (
    <TitleWrapper>
    <div onClick={onClick}>
        {format(selectedDate, "dd.MM.yyyy")}
        <svg
        width="24"
        height="24"
        className="react-datepicker__calendar-icon"         
        >
        <use href={sprite + "#icon-calendar"}></use>
        </svg>
    </div>
    </TitleWrapper>
);
};

export default StyledDatepickerBirthday;
