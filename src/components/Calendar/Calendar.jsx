import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  const handleYearChange = (date) => {
    setSelectedYear(date);
  };

  const handleMonthChange = (date) => {
    setSelectedMonth(date);
  };

  return (
    <div>
      <div>
        <h2> Selected Year:</h2>
        <DatePicker
          selected={selectedYear}
          onChange={handleYearChange}
          showYearDropdown
          dateFormat="yyyy"
        />
      </div>
      <div>
        <h2> Selected Month:</h2>
        <DatePicker
          selected={selectedMonth}
          onChange={handleMonthChange}
          showMonthDropdown
          dateFormat="MM/yyyy"
        />
      </div>
    </div>
  );
}

export default MyDatePicker;
