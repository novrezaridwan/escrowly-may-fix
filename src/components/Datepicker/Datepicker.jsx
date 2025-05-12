import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Datepicker.scss";
import { Icon } from "@iconify/react";

const DateInput = () => {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="input-wrapper-custom">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="dd/mm/yyyy"
        dateFormat="dd/MM/yyyy"
        className="input-datepicker-custom"
      />
      <Icon icon="tabler:calendar-event-filled" className="icon" />
    </div>
  );
};

export default DateInput;
