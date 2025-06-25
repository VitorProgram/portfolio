export const formattedDate = (date: Date) => {
  const newDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(date);

  return newDate;
};
