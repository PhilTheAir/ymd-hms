import { strDateAddNum, subtractStrDate } from './calculate';

describe('add date', () => {
  it('should return date', () => {
    expect(strDateAddNum('19951229', 'yyyymmdd', 22)).toBe('19960120');
    expect(strDateAddNum('15-11-1995', 'dd-mm-yyyy', -22)).toBe('24-10-1995');
  });
});

describe('subtract two string dates', () => {
  it('should return date', () => {
    const start = '2016-12-21';
    const end = '2017-01-05';
    const formatter = 'yyyy-mm-dd';
    expect(subtractStrDate(start, end, formatter)).toEqual(15);
  });
});