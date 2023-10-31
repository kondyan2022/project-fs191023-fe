import React, { useState } from 'react';
import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import {
  CalendarGlobalStyles,
  TitleWrapper,
} from './BirthdayDatepicker.styled';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../images/sprite.svg';

const BirthdayDatepicker = ({ minDate, maxDate, disabledDates }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const currentYear = new Date().getFullYear();

  const CustomInput = ({ onClick }) => {
    return (
      <TitleWrapper>
        <div onClick={onClick}>
          {format(selectedDate, 'dd.MM.yyyy')}
          <svg width="18" height="18" className="birthday-calendar-icon">
            <use href={sprite + '#icon-calendar'} />
          </svg>
        </div>
      </TitleWrapper>
    );
  };

  return (
    <div>
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
        dateFormat="dd MM yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 2)}
        excludeDates={disabledDates}
        showYearDropdown
        yearDropdownItemNumber={100}
        yearDropdownScrollable
        scrollableYearDropdown
        showMonthDropdown
      />
      <CalendarGlobalStyles />
    </div>
  );
};

export default BirthdayDatepicker;
