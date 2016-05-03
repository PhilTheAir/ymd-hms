[![Build Status](https://travis-ci.org/PhilTheAir/ymd-hms.svg?branch=master)](https://travis-ci.org/PhilTheAir/ymd-hms)

# ymd-hms: Provide common formats of Date and Time.

## Installation

npm install ymd-hms

## Usage
```
var y = require('ymd-hms').ymd;
var Z = require('ymd-hms').hms;

y.yyyymmdd();   `// 20160523`
y.yyyy_mm_dd(); `// 2016-05-23`
y.yyyysddsmm(); `// 2016/05/23`
y.ddmmyyyy();   `// 23052016`
y.dd_mm_yyyy(); `// 23-05-2016`
y.ddsmmsyyyy(); `// 03/05/2016`
y.mmddyyyy();   `// 05232016`
y.mm_dd_yyyy(); `// 05-23-2016`
y.mmsddsyyyy(); `// 05/23/2016`

var z = new Z();
z.hhmm();       `// 13:58`
z.hhmmss();     `// 13:58:26`
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
