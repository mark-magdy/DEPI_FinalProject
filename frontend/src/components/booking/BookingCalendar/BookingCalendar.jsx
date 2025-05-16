import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingCalendar = ({ selectedDate, onDateChange }) => {
  // Disable past dates
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6; // Disable weekends
  };

  return (
    <div className="calendar-container">
      <h4 className="mb-3">Select Date</h4>
      <Form.Group controlId="bookingDate">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => onDateChange(date)}
          minDate={new Date()}
          filterDate={isWeekday}
          inline
          className="form-control"
          calendarClassName="w-100"
        />
      </Form.Group>
      <div className="availability-info mt-3">
        <p className="text-success">
          <i className="bi bi-circle-fill me-2"></i>
          Available
        </p>
        <p className="text-muted">
          <i className="bi bi-circle-fill me-2"></i>
          Unavailable
        </p>
      </div>
    </div>
  );
};

export default BookingCalendar;
