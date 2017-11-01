const yyyy = d => d.getFullYear();

const mm = d => ('0' + (d.getMonth() + 1)).slice(-2);

const dd = d => ('0' + d.getDate()).slice(-2);

const hh = d => ('0' + d.getHours()).slice(-2);

const min = d => ('0' + d.getMinutes()).slice(-2);

const ss = d => ('0' + d.getSeconds()).slice(-2);

const dateFormatter = (d, formatter) => {
  switch (formatter) {
    case 'yyyymmdd':
      return `${yyyy(d)}${mm(d)}${dd(d)}`;
    case 'yyyy/mm/dd':
      return `${yyyy(d)}/${mm(d)}/${dd(d)}`;
    case 'yyyy-mm-dd':
      return `${yyyy(d)}-${mm(d)}-${dd(d)}`;
    case 'mmddyyyy':
      return `${mm(d)}${dd(d)}${yyyy(d)}`;
    case 'mm/dd/yyyy':
      return `${mm(d)}/${dd(d)}/${yyyy(d)}`;
    case 'mm-dd-yyyy':
      return `${mm(d)}-${dd(d)}-${yyyy(d)}`;
    case 'ddmmyyyy':
      return `${dd(d)}${mm(d)}${yyyy(d)}`;
    case 'dd/mm/yyyy':
      return `${dd(d)}/${mm(d)}/${yyyy(d)}`;
    case 'dd-mm-yyyy':
      return `${dd(d)}-${mm(d)}-${yyyy(d)}`;
    default:
      return '';
  }
}

const timeFormatter = (d, formatter) => {
  switch (formatter) {
    case 'hhmmss':
      return `${hh(d)}:${min(d)}:${ss(d)}`;
    case 'hhmm':
      return `${hh(d)}:${min(d)}`;
    default:
      return '';
  }
}

const strToDateTime = (str, formatter) => {
  let year, month, day;
  switch (formatter) {
    case 'yyyymmdd':
      year = str.slice(0, 4);
      month = str.slice(4, 6);
      day = str.slice(-2);
      break;
    case 'yyyy/mm/dd':
    case 'yyyy-mm-dd':
      year = str.slice(0, 4);
      month = str.slice(5, 7);
      day = str.slice(-2);
      break;
    case 'mmddyyyy':
      year = str.slice(-4);
      month = str.slice(0, 2);
      day = str.slice(2, 4);
      break;
    case 'mm/dd/yyyy':
    case 'mm-dd-yyyy':
      year = str.slice(-4);
      month = str.slice(0, 2);
      day = str.slice(3, 5);
      break;
    case 'ddmmyyyy':
      year = str.slice(-4);
      month = str.slice(2, 4);
      day = str.slice(0, 2);
      break;
    case 'dd/mm/yyyy':
    case 'dd-mm-yyyy':
      year = str.slice(-4);
      month = str.slice(3, 5);
      day = str.slice(0, 2);
      break;
    default:
      return '';
  }
  return new Date(year, month - 1, day);
}

const strDateReformat = (str, fromFormatter, toFormatter) => {
  return addDaysFromStr(str, fromFormatter, 0, toFormatter);
}

const addDays = (date, days, formatter) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return dateFormatter(newDate, formatter);
}

const addDaysFromStr = (strDate, fromFormatter, days, toFormatter = fromFormatter) => {
  let newDate = strToDateTime(strDate, fromFormatter);
  newDate.setDate(newDate.getDate() + days);
  return dateFormatter(newDate, toFormatter);
}

const iterateDays = (startDate, endDay, formatter) => {
  let result = [];
  for (let d = startDate; d <= endDay; d.setDate(d.getDate() + 1)) {
    let nextDate = new Date(d);
    result.push(dateFormatter(nextDate, formatter));
  }
  return result;
}

const iterateDaysFromStr = (strStartDate, strEndDate, fromFormatter, toFormatter = fromFormatter) => {
  let result = [];
  let startDate = strToDateTime(strStartDate, fromFormatter);
  let endDay = strToDateTime(strEndDate, fromFormatter);
  for (let d = startDate; d <= endDay; d.setDate(d.getDate() + 1)) {
    let nextDate = new Date(d);
    result.push(dateFormatter(nextDate, toFormatter));
  }
  return result;
}

const dateStrSubtraction = (dateStr1, dateStr2, formatter) => {
  let date1 = strToDateTime(dateStr1, formatter);
  let date2 = strToDateTime(dateStr2, formatter);
  let timeDiff = Math.abs(date1 - date2);
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
};

module.exports.yyyy = yyyy;
module.exports.mm = mm;
module.exports.dd = dd;
module.exports.hh = hh;
module.exports.min = min;
module.exports.ss = ss;
module.exports.dateFormatter = dateFormatter;
module.exports.timeFormatter = timeFormatter;
module.exports.strToDateTime = strToDateTime;
module.exports.strDateReformat = strDateReformat;
module.exports.addDays = addDays;
module.exports.addDaysFromStr = addDaysFromStr;
module.exports.iterateDays = iterateDays;
module.exports.iterateDaysFromStr = iterateDaysFromStr;
module.exports.dateStrSubtraction = dateStrSubtraction;