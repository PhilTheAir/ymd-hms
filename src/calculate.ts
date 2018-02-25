import { dateToStr, strToDate, strFormat } from './index';

export const strDateAddNum = (strDate: string, fromFormatter: string, days: number): string => {
  let newDate = strToDate(strDate, fromFormatter);
  newDate.setDate(newDate.getDate() + days);
  let result = dateToStr(fromFormatter, newDate);
  return result;
}

export const subtractStrDate = (dateStr1: string, dateStr2: string, formatter1 = strFormat.yyyymmdd.toString(), formatter2 = formatter1): number => {
  let date1 = +strToDate(dateStr1, formatter1);
  let date2 = +strToDate(dateStr2, formatter2);
  let timeDiff = Math.abs(date1 - date2);
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};