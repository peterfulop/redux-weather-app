export const convertDateToHours = (date: number, convert?: false): string => {
  const dateFormat = convert ? new Date(date) : new Date(date * 1000);
  return new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(dateFormat);
};
