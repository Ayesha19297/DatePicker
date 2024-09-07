import React from "react";
import RecurrenceOptions from "./DateRecurrence";
import DateRangePicker from "./DateRange";
//import CalendarPreview from "./DatePreview";
import { DatePickerProvider } from "../Context/DPcontext";
import MiniCalendar from "./DatePreview";

const DatePicker = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="py-6 text-4xl font-bold text-center text-pink-900">
          Recurring Date Picker
        </h1>
      </div>
      <div className="p-10">
        <h2 className="text-2xl font-semibold mb-4">Select Dates</h2>
        <DatePickerProvider>
          <DateRangePicker />
          <RecurrenceOptions />
          {/* <CalendarPreview /> */}
          <MiniCalendar />
        </DatePickerProvider>
      </div>
    </>
  );
};

export default DatePicker;
