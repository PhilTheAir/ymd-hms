# ymd-hms: Provide common formats of Date and Time.

## Installation

npm install ymd-hms

## Usage
```
import { dateToStr, timeToStr, strToDate, strDateReformat } from 'ymd-hms';

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
```

```
import { strDateAddNum, subtractStrDate } from 'ymd-hms';

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
```

```
import { iterateDaysOnDateToDate, iterateDaysOnStrToStr } from 'ymd-hms';

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
```

```
import { strFormat } from 'ymd-hms';

describe('date format', () => {
  it('should return elements in enum', () => {
    expect(strFormat.yyyymmdd).toBe('yyyymmdd');
    expect(strFormat.yyyymmddSlash).toBe('yyyy/mm/dd');
    expect(strFormat.yyyymmddHyphen).toBe('yyyy-mm-dd');
    expect(strFormat.mmddyyyy).toBe('mmddyyyy');
    expect(strFormat.mmddyyyySlash).toBe('mm/dd/yyyy');
    expect(strFormat.mmddyyyyHyphen).toBe('mm-dd-yyyy');
    expect(strFormat.ddmmyyyy).toBe('ddmmyyyy');
    expect(strFormat.ddmmyyyySlash).toBe('dd/mm/yyyy');
    expect(strFormat.ddmmyyyyHyphen).toBe('dd-mm-yyyy');
    expect(strFormat.hhmmss12).toBe('hh:mm:ss12');
    expect(strFormat.hhmmss24).toBe('hh:mm:ss24');
    expect(strFormat.hhmm12).toBe('hh:mm12');
    expect(strFormat.hhmm24).toBe('hh:mm24');
  });
});

```
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History


## Credits


## License

ISC