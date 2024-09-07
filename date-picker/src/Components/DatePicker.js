import React from "react";
import RecurrenceOptions from "./DateRecurrence";
import DateRangePicker from "./DateRange";
import CalendarPreview from "./DatePreview";
import { DatePickerProvider } from "../Context/DPcontext";

const DatePicker = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Select Recurring Dates</h2>
      <DatePickerProvider>
        <DateRangePicker />
        <RecurrenceOptions />
        <CalendarPreview />
      </DatePickerProvider>
    </div>
  );
};

export default DatePicker;
