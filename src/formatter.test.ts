import { dateToStr, timeToStr, strToDate, strDateReformat } from './formatter';

describe('date format', () => {
  it('should return date in different format', () => {
    const d = new Date('December 7, 1995 03:24:00');
    expect(dateToStr('yyyymmdd', d)).toBe('19951207');
    expect(dateToStr('yyyy/mm/dd', d)).toBe('1995/12/07');
    expect(dateToStr('yyyy-mm-dd', d)).toBe('1995-12-07');
    expect(dateToStr('mmddyyyy', d)).toBe('12071995');
    expect(dateToStr('mm/dd/yyyy', d)).toBe('12/07/1995');
    expect(dateToStr('mm-dd-yyyy', d)).toBe('12-07-1995');
    expect(dateToStr('ddmmyyyy', d)).toBe('07121995');
    expect(dateToStr('dd/mm/yyyy', d)).toBe('07/12/1995');
    expect(dateToStr('dd-mm-yyyy', d)).toBe('07-12-1995');
    expect(dateToStr('')).toBe('');
  });
});

describe('time format', () => {
  it('should return time in different format', () => {
    const d = new Date('December 7, 1995 19:24:00');
    expect(timeToStr('hh:mm:ss12', d)).toBe('07:24:00');
    expect(timeToStr('hh:mm:ss24', d)).toBe('19:24:00');
    expect(timeToStr('hh:mm12', d)).toBe('07:24');
    expect(timeToStr('hh:mm24', d)).toBe('19:24');
    expect(timeToStr('')).toBe('');
  });
});

describe('time format', () => {
  it('should return time in different format', () => {
    expect(strToDate('19951207', 'yyyymmdd')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('1995/12/07', 'yyyy/mm/dd')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('1995-12-07', 'yyyy-mm-dd')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('12071995', 'mmddyyyy')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('12/07/1995', 'mm/dd/yyyy')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('12-07-1995', 'mm-dd-yyyy')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('07121995', 'ddmmyyyy')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('07/12/1995', 'dd/mm/yyyy')).toEqual(new Date(1995, 11, 7));
    expect(strToDate('07-12-1995', 'dd-mm-yyyy')).toEqual(new Date(1995, 11, 7));
  });
});

describe('time re-format', () => {
  it('should return time in different format', () => {
    expect(strDateReformat('19951207', 'yyyymmdd', 'dd/mm/yyyy')).toBe('07/12/1995');
    expect(strDateReformat('1995/12/07', 'yyyy/mm/dd', 'mm-dd-yyyy')).toBe('12-07-1995');
  });
});
