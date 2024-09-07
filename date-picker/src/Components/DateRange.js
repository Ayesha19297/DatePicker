import React, { useContext } from "react";
import { DatePickerContext } from "../Context/DPcontext";

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } =
    useContext(DatePickerContext);

  return (
    <div className="mb-4">
      <label className="block text-gray-900 text-2xl font-large mb-2">Date Range :</label>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="block w-full mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default DateRange;
