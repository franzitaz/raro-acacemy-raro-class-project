export const formataDate = (date: string) => {
  return new Date(date).toLocaleDateString();
};

export const formataDateTime = (date: string) => {
  const dateTime = new Date(date);
  const dateString = dateTime.toLocaleDateString();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  return `${dateString} ${hours}:${minutes}`;
};
