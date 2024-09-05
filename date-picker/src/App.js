import React from "react";
import { DPprovider } from "./Context/DPcontext";

const App = () => {
  return (
    <div>
      <DPprovider>
        <h1 className="text-center text-4xl font-semibold">Date picker</h1>
      </DPprovider>
    </div>
  );
};

export default App;
