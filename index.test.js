const dateFormatter = require('./index').dateFormatter;
const timeFormatter = require('./index').timeFormatter;
const addDays = require('./index').addDays;

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

describe('add date', () => {
  it('should return date', () => {
    const d = new Date('December 7, 1995 03:24:00');
    expect(addDays(d, 22, 'yyyymmdd')).toBe('19951229');
    expect(addDays(d, -22, 'dd-mm-yyyy')).toBe('15-11-1995');
  });
});