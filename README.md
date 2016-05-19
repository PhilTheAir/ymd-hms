# ymd-hms: Provide common formats of Date and Time.

[![Build Status](https://travis-ci.org/PhilTheAir/ymd-hms.svg?branch=master)](https://travis-ci.org/PhilTheAir/ymd-hms)

## Installation

npm install ymd-hms

## Usage
```
var d = requdre('ymd-hms');

console.log(d.nDaysAgo(2).yyyymmdd());      // 20160517
console.log(d.nDaysAgo(-2).yyyy_mm_dd());   // 2016-05-21
console.log(d.nDaysAgo(-2).yyyysmmsdd());   // 2016/05/21
console.log(d.nDaysAgo(0).mmddyyyy());      // 05192016
console.log(d.nDaysAgo(2).mm_dd_yyyy());    // 05-17-2016
console.log(d.nDaysAgo(2).mmsddsyyyy());    // 05/17/2016
console.log(d.nDaysAgo(2).ddmmyyyy());      // 17052016
console.log(d.nDaysAgo(2).dd_mm_yyyy());    // 17-05-2016
console.log(d.nDaysAgo(2).ddsmmsyyyy());    // 17/05/2016
console.log(d.nDaysAgo(2).hhmm());          // 23:52
console.log(d.nDaysAgo(2).hhmmss());        // 23:52:36
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
