import React, {createContext ,useState} from 'react'

const DPcontext = createContext();

export const DPprovider = ({children}) => {
    const [recurrence, setRecurrence] = useState({
        pattern: 'daily',
        interval: 1,
        daysOfWeek: [],
        nthDay: 1,
        startDate: null,
        endDate: null,
    });
  return (
    <DPcontext.Provider value={{recurrence, setRecurrence}}>{children}</DPcontext.Provider>
  );
};
export default DPcontext;