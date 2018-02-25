import { dateToStr, strToDate, strFormat, yyyy, mm, dd } from './index';

export const iterateDaysOnDateToDate = (startDate: Date, endDay: Date): Array<Date> => {
  let result = [];
  let year = yyyy(startDate);
  let month = mm(startDate);
  let date = dd(startDate);
  let dateToStart = new Date(+year, +month - 1, +date);
  for (let d = dateToStart; d <= endDay; d.setDate(d.getDate() + 1)) {
    let _d = new Date(d);
    result.push(_d);
  }
  return result;
}

export const iterateDaysOnStrToStr = (strStartDate: string, strEndDate: string, fromFormatter = strFormat.yyyymmdd.toString(), toFormatter = fromFormatter): Array<string> => {
  let result = [];
  let startDate = strToDate(strStartDate, fromFormatter);
  let endDay = strToDate(strEndDate, fromFormatter);
  for (let d = startDate; d <= endDay; d.setDate(d.getDate() + 1)) {
    let nextDateStr = dateToStr(toFormatter, d);
    result.push(nextDateStr);
  }
  return result;
}