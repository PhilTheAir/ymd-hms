# ymd-hms: Provide common formats of Date and Time.

[![Build Status](https://travis-ci.org/PhilTheAir/ymd-hms.svg?branch=master)](https://travis-ci.org/PhilTheAir/ymd-hms)

## Installation

npm install ymd-hms

## Usage
```
import { dateFormatter, timeFormatter, addDays, iterateDays } from 'ymd-hms';

const d = new Date('December 7, 1995 03:24:00');

console.log(dateFormatter(d, 'yyyymmdd'));
// '19951207'

console.log(dateFormatter(d, 'yyyy/mm/dd'));
// '1995/12/07'

console.log(dateFormatter(d, 'yyyy-mm-dd'));
// '1995-12-07'

console.log(dateFormatter(d, 'mmddyyyy'));
// '12071995'

console.log(dateFormatter(d, 'mm/dd/yyyy'));
// '12/07/1995'

console.log(dateFormatter(d, 'mm-dd-yyyy'));
// '12-07-1995'

console.log(dateFormatter(d, 'ddmmyyyy'));
// '07121995'

console.log(dateFormatter(d, 'dd/mm/yyyy'));
// '07/12/1995'

console.log(dateFormatter(d, 'dd-mm-yyyy'));
// '07-12-1995'

console.log(dateFormatter(d, 'other format'));
// ''

console.log(timeFormatter(d, 'hhmmss'));
// '03:24:00'

console.log(timeFormatter(d, 'hhmm'));
// '03:24'

console.log(timeFormatter(d, 'other format'));
// ''

console.log(addDays(d, 22, 'yyyymmdd'));
// '19951229'

console.log(addDays(d, -22, 'dd-mm-yyyy'));
// '15-11-1995'

const startDate = new Date('December 7, 1995 03:24:00');
const endDay = new Date('December 17, 1995 03:24:00');
console.log(iterateDays(startDate, endDay, 'yyyy/mm/dd'));
// ['1995/12/07', '1995/12/08', '1995/12/09', '1995/12/10', '1995/12/11', 
// '1995/12/12', '1995/12/13', '1995/12/14', '1995/12/15', '1995/12/16', '1995/12/17']

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
