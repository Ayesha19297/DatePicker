import React from "react";
import DatePicker from "./Components/DatePicker";

const App = () => {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="py-4 text-4xl font-bold text-center">
          Recurring Date Picker
        </h1>
        <DatePicker />
      </div>
    </div>
  );
};

export default App;
