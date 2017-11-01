# ymd-hms: Provide common formats of Date and Time.

[![Build Status](https://travis-ci.org/PhilTheAir/ymd-hms.svg?branch=master)](https://travis-ci.org/PhilTheAir/ymd-hms)

## Installation

npm install ymd-hms

## Usage
```
import { dateFormatter, timeFormatter, strToDateTime, strDateReformat, addDays, addDaysFromStr, iterateDays, iterateDaysFromStr, dateStrSubtraction } from 'ymd-hms';

const d = new Date('December 7, 1995 03:24:00');

dateFormatter(d, 'yyyymmdd'); // '19951207'
dateFormatter(d, 'yyyy/mm/dd'); // '1995/12/07'
dateFormatter(d, 'yyyy-mm-dd'); // '1995-12-07'
dateFormatter(d, 'mmddyyyy'); // '12071995'
dateFormatter(d, 'mm/dd/yyyy'); // '12/07/1995'
dateFormatter(d, 'mm-dd-yyyy'); // '12-07-1995'
dateFormatter(d, 'ddmmyyyy'); // '07121995'
dateFormatter(d, 'dd/mm/yyyy'); // '07/12/1995'
dateFormatter(d, 'dd-mm-yyyy'); // '07-12-1995'
dateFormatter(d, 'other format'); // ''

timeFormatter(d, 'hhmmss'); // '03:24:00'
timeFormatter(d, 'hhmm'); // '03:24'
timeFormatter(d, 'other format'); // ''

strToDateTime('19951207', 'yyyymmdd'); // new Date('1995', '11', '07');
strToDateTime('07/12/1995', 'dd/mm/yyyy'); // new Date('1995', '11', '07');

strDateReformat('19951207', 'yyyymmdd', 'dd/mm/yyyy');  // '07/12/1995'
strDateReformat('1995/12/07', 'yyyy/mm/dd', 'mm-dd-yyyy');  // '12-07-1995'

addDays(d, 22, 'yyyymmdd'); // '19951229'
addDays(d, -22, 'dd-mm-yyyy'); // '15-11-1995'

addDaysFromStr('19951229, 'yyyymmdd', 11); // '19960109';
addDaysFromStr('19951229, 'yyyymmdd', -11, 'dd-mm-yyyy'); // '18-12-1995'

const startDate = new Date('December 7, 1995 03:24:00');
const endDay = new Date('December 17, 1995 03:24:00');
iterateDays(startDate, endDay, 'yyyy/mm/dd');
// ['1995/12/07', '1995/12/08', '1995/12/09', '1995/12/10', '1995/12/11', 
// '1995/12/12', '1995/12/13', '1995/12/14', '1995/12/15', '1995/12/16', '1995/12/17']

const strStartDate = '2017-01-01';
const strEndDate = '2017-01-05';
iterateDaysFromStr(strStartDate, strEndDate, 'yyyy-mm-dd');
// ['2017-01-01', '2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05']
iterateDaysFromStr(strStartDate, strEndDate, 'yyyy-mm-dd', 'dd/mm/yyyy');
// ['01/01/2017', '02/01/2017', '03/01/2017', '04/01/2017', '05/01/2017']

const start = '2016-12-21';
const end = '2017-01-05';
const formatter = 'yyyy-mm-dd';
dateStrSubtraction(start, end, formatter);
// 15

```
## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History


## Credits


## License

ISC
