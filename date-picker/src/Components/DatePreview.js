import React, { useContext } from "react";
import { DatePickerContext } from "../Context/DPcontext";

const DatePreview = () => {
  const { previewDates } = useContext(DatePickerContext);

  return (
    <div className="mt-6">
      {previewDates.length > 0 ? (
        <>
          <h3 className="text-2xl font-semibold mb-4">
            Selected Recurring Dates:
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {previewDates.map((date, index) => (
              <div key={index} className="p-2 bg-gray-100 rounded text-center">
                {date}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-900 text-lg">No recurring dates selected yet.</p>
      )}
    </div>
  );
};

export default DatePreview;
