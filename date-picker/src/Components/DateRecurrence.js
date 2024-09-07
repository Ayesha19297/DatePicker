import React, { useContext } from "react";
import { DatePickerContext } from "../Context/DPcontext";

const DateRecurrence = () => {
  const { pattern, setPattern } = useContext(DatePickerContext);

  const options = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div className="mb-4">
      <label className="block text-gray-900 text-2xl mb-2">
        Recurrence Pattern
      </label>
      <select
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
        className="block w-1/2 mt-1 p-2 border border-gray-300 rounded"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateRecurrence;
