import { iterateDaysOnDateToDate, iterateDaysOnStrToStr } from './iterator';

describe('string to date', () => {
  it('should return date', () => {
    const startDate = new Date('December 7, 1995 03:24:00');
    const endDay = new Date('December 9, 1995 03:24:00');
    let days = [new Date(1995, 11, 7), new Date(1995, 11, 8), new Date(1995, 11, 9)];
    let result = iterateDaysOnDateToDate(startDate, endDay);
    expect(result).toEqual(days);
  });
});

describe('iterate date from string', () => {
  it('should return date', () => {
    const start = '2017-01-01';
    const end = '2017-01-05';
    const result1 = ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05'];
    const result2 = ['01/01/2017', '02/01/2017', '03/01/2017', '04/01/2017', '05/01/2017'];
    expect(iterateDaysOnStrToStr(start, end, 'yyyy-mm-dd')).toEqual(result1);
    expect(iterateDaysOnStrToStr(start, end, 'yyyy-mm-dd', 'dd/mm/yyyy')).toEqual(result2);
  });
});