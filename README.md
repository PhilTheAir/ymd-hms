# ymd-hms: Provide common formats of Date and Time.

[![Build Status](https://travis-ci.org/PhilTheAir/ymd-hms.svg?branch=master)](https://travis-ci.org/PhilTheAir/ymd-hms)

## Installation

npm install ymd-hms

## Usage
```
const dateFormatter = require('ymd-hms').dateFormatter;
const timeFormatter = require('ymd-hms').timeFormatter;

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
