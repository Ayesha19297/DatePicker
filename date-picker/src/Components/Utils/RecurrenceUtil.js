export const generatePreviewDates = (pattern, startDate, endDate) => {
  if (!startDate || isNaN(new Date(startDate).getTime())) return [];
  let dates = [];
  let currentDate = new Date(startDate);

  if (pattern === "Daily") {
    while (
      (!endDate || currentDate <= new Date(endDate)) &&
      dates.length < 365
    ) {
      dates.push(new Date(currentDate).toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
  } else if (pattern === "Weekly") {
    while (
      (!endDate || currentDate <= new Date(endDate)) &&
      dates.length < 52
    ) {
      dates.push(new Date(currentDate).toDateString());
      currentDate.setDate(currentDate.getDate() + 7);
    }
  } else if (pattern === "Monthly") {
    while (
      (!endDate || currentDate <= new Date(endDate)) &&
      dates.length < 12
    ) {
      dates.push(new Date(currentDate).toDateString());
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
  } else if (pattern === "Yearly") {
    while (
      (!endDate || currentDate <= new Date(endDate)) &&
      dates.length < 10
    ) {
      dates.push(new Date(currentDate).toDateString());
      currentDate.setFullYear(currentDate.getFullYear() + 1);
    }
  }

  return dates;
};
