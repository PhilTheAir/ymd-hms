const dateFormatter = require('./index').dateFormatter;
const timeFormatter = require('./index').timeFormatter;
const strToDateTime = require('./index').strToDateTime;
const addDays = require('./index').addDays;
const addDaysFromStr = require('./index').addDaysFromStr;
const iterateDays = require('./index').iterateDays;
const iterateDaysFromStr = require('./index').iterateDaysFromStr;
const DateStrSubtraction = require('./index').DateStrSubtraction;

describe('date format', () => {
  it('should return date in different format', () => {
    const d = new Date('December 7, 1995 03:24:00');
    expect(dateFormatter(d, 'yyyymmdd')).toBe('19951207');
    expect(dateFormatter(d, 'yyyy/mm/dd')).toBe('1995/12/07');
    expect(dateFormatter(d, 'yyyy-mm-dd')).toBe('1995-12-07');
    expect(dateFormatter(d, 'mmddyyyy')).toBe('12071995');
    expect(dateFormatter(d, 'mm/dd/yyyy')).toBe('12/07/1995');
    expect(dateFormatter(d, 'mm-dd-yyyy')).toBe('12-07-1995');
    expect(dateFormatter(d, 'ddmmyyyy')).toBe('07121995');
    expect(dateFormatter(d, 'dd/mm/yyyy')).toBe('07/12/1995');
    expect(dateFormatter(d, 'dd-mm-yyyy')).toBe('07-12-1995');
    expect(dateFormatter(d, '')).toBe('');
  });
});

describe('time format', () => {
  it('should return time in different format', () => {
    const d = new Date('December 7, 1995 03:24:00');
    expect(timeFormatter(d, 'hhmmss')).toBe('03:24:00');
    expect(timeFormatter(d, 'hhmm')).toBe('03:24');
    expect(timeFormatter(d, '')).toBe('');
  });
});

describe('time format', () => {
  it('should return time in different format', () => {
    expect(strToDateTime('19951207', 'yyyymmdd')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('1995/12/07', 'yyyy/mm/dd')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('1995-12-07', 'yyyy-mm-dd')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('12071995', 'mmddyyyy')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('12/07/1995', 'mm/dd/yyyy')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('12-07-1995', 'mm-dd-yyyy')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('07121995', 'ddmmyyyy')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('07/12/1995', 'dd/mm/yyyy')).toEqual(new Date('1995', '11', '07'));
    expect(strToDateTime('07-12-1995', 'dd-mm-yyyy')).toEqual(new Date('1995', '11', '07'));
  });
});

describe('add date', () => {
  it('should return date', () => {
    const d = new Date('December 7, 1995 03:24:00');
    expect(addDays(d, 22, 'yyyymmdd')).toBe('19951229');
    expect(addDays(d, -22, 'dd-mm-yyyy')).toBe('15-11-1995');
  });
});

describe('add date from string', () => {
  it('should return date', () => {
    const str = '19951229';
    expect(addDaysFromStr(str, 'yyyymmdd', 11)).toBe('19960109');
    expect(addDaysFromStr(str, 'yyyymmdd', -11, 'dd-mm-yyyy')).toBe('18-12-1995');
  });
});

describe('string to date', () => {
  it('should return date', () => {
    const startDate = new Date('December 7, 1995 03:24:00');
    const endDay = new Date('December 17, 1995 03:24:00');
    let days = ['1995/12/07', '1995/12/08', '1995/12/09', '1995/12/10', '1995/12/11', '1995/12/12', '1995/12/13', '1995/12/14', '1995/12/15', '1995/12/16', '1995/12/17'];
    let result = iterateDays(startDate, endDay, 'yyyy/mm/dd');
    expect(result).toEqual(days);
  });
});

describe('iterate date from string', () => {
  it('should return date', () => {
    const start = '2017-01-01';
    const end = '2017-01-05';
    const result1 = ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05'];
    const result2 = ['01/01/2017', '02/01/2017', '03/01/2017', '04/01/2017', '05/01/2017'];
    expect(iterateDaysFromStr(start, end, 'yyyy-mm-dd')).toEqual(result1);
    expect(iterateDaysFromStr(start, end, 'yyyy-mm-dd', 'dd/mm/yyyy')).toEqual(result2);
  });
});

describe('subtract two string dates', () => {
  it('should return date', () => {
    const start = '2016-12-21';
    const end = '2017-01-05';
    const formatter = 'yyyy-mm-dd';
    expect(DateStrSubtraction(start, end, formatter)).toEqual(15);
  });
});