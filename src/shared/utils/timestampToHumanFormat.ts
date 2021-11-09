export const dateFromUnix = (timestamp: number) => {
  const date: Date = new Date(timestamp * 1000);
  const month: number = date.getMonth();
  const monthDict: { [name: number]: string } = {
    0: "января",
    1: "февраля",
    2: "марта",
    3: "апреля",
    4: "мая",
    5: "июня",
    6: "июля",
    7: "августа",
    8: "сентября",
    9: "октября",
    10: "ноября",
    11: "декабря",
  };
  const monthName: string = monthDict[month];
  return `${date.getDate()} ${monthName} ${date.getFullYear()} в ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} ${
    Intl.DateTimeFormat().resolvedOptions().timeZone
  }`;
};
