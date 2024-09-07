import React, { createContext, useState, useEffect } from "react";
import { generatePreviewDates } from "../Components/Utils/RecurrenceUtil";

export const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrencePattern, setRecurrencePattern] = useState("Daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [previewDates, setPreviewDates] = useState([]);

  useEffect(() => {
    const updatedDates = generatePreviewDates(
      recurrencePattern,
      startDate,
      endDate
    );
    setPreviewDates(updatedDates);
  }, [recurrencePattern, startDate, endDate]);

  return (
    <DatePickerContext.Provider
      value={{
        recurrencePattern,
        setRecurrencePattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        previewDates,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};
