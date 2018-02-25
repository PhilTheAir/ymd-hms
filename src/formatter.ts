import { strFormat } from './index';

export const yyyy = (d: Date): string => d.getFullYear().toString();

export const mm = (d: Date): string => ('0' + (d.getMonth() + 1)).slice(-2);

export const dd = (d: Date): string => ('0' + d.getDate()).slice(-2);

export const hh = (d: Date): string => ('0' + d.getHours()).slice(-2);

export const min = (d: Date): string => ('0' + d.getMinutes()).slice(-2);

export const ss = (d: Date): string => ('0' + d.getSeconds()).slice(-2);

export const dateToStr = (formatter: string, d = new Date()): string => {
  switch (formatter) {
    case strFormat.yyyymmdd:
      return `${yyyy(d)}${mm(d)}${dd(d)}`;
    case strFormat.yyyymmddSlash:
      return `${yyyy(d)}/${mm(d)}/${dd(d)}`;
    case strFormat.yyyymmddHyphen:
      return `${yyyy(d)}-${mm(d)}-${dd(d)}`;
    case strFormat.mmddyyyy:
      return `${mm(d)}${dd(d)}${yyyy(d)}`;
    case strFormat.mmddyyyySlash:
      return `${mm(d)}/${dd(d)}/${yyyy(d)}`;
    case strFormat.mmddyyyyHyphen:
      return `${mm(d)}-${dd(d)}-${yyyy(d)}`;
    case strFormat.ddmmyyyy:
      return `${dd(d)}${mm(d)}${yyyy(d)}`;
    case strFormat.ddmmyyyySlash:
      return `${dd(d)}/${mm(d)}/${yyyy(d)}`;
    case strFormat.ddmmyyyyHyphen:
      return `${dd(d)}-${mm(d)}-${yyyy(d)}`;
    default:
      return '';
  }
}

export const timeToStr = (formatter: string, d = new Date()): string => {
  switch (formatter) {
    case strFormat.hhmmss:
      return `${hh(d)}:${min(d)}:${ss(d)}`;
    case strFormat.hhmm:
      return `${hh(d)}:${min(d)}`;
    default:
      return '';
  }
}

export const strToDate = (str: string, formatter = strFormat.yyyymmdd.toString()): Date => {
  let year, month, day;
  switch (formatter) {
    case strFormat.yyyymmdd:
    default: {
      year = str.slice(0, 4);
      month = str.slice(4, 6);
      day = str.slice(-2);
      break;
    }
    case strFormat.yyyymmddSlash:
    case strFormat.yyyymmddHyphen: {
      year = str.slice(0, 4);
      month = str.slice(5, 7);
      day = str.slice(-2);
      break;
    }
    case strFormat.mmddyyyy: {
      year = str.slice(-4);
      month = str.slice(0, 2);
      day = str.slice(2, 4);
      break;
    }
    case strFormat.mmddyyyySlash:
    case strFormat.mmddyyyyHyphen: {
      year = str.slice(-4);
      month = str.slice(0, 2);
      day = str.slice(3, 5);
      break;
    }
    case strFormat.ddmmyyyy: {
      year = str.slice(-4);
      month = str.slice(2, 4);
      day = str.slice(0, 2);
      break;
    }
    case strFormat.ddmmyyyySlash:
    case strFormat.ddmmyyyyHyphen: {
      year = str.slice(-4);
      month = str.slice(3, 5);
      day = str.slice(0, 2);
      break;
    }
  }
  return new Date(+year, +month - 1, +day);
}

export const strDateReformat = (str: string, fromFormatter: string, toFormatter: string): string => {
  let newDate = strToDate(str, fromFormatter);
  let newFormat = dateToStr(toFormatter, newDate);
  return newFormat;
}