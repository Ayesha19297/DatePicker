import React, { createContext, useState, useEffect } from "react";
import { generatePreviewDates } from "../Components/Utils/RecurrenceUtil";

export const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [pattern, setPattern] = useState("Daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [previewDates, setPreviewDates] = useState([]);

  useEffect(() => {
    const updatedDates = generatePreviewDates(pattern, startDate, endDate);
    setPreviewDates(updatedDates);
  }, [pattern, startDate, endDate]);

  return (
    <DatePickerContext.Provider
      value={{
        pattern,
        setPattern,
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
