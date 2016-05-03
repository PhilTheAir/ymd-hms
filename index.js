var d = new Date();
var yyyy = d.getFullYear();
var mm = d.getMonth() + 1;
var dd  = d.getDate();
var hh = d.getHours();
var min = d.getMinutes();
var ss = d.getSeconds()

var mm_00 = ('0' + mm).slice(-2);
var dd_00 = ('0' + dd).slice(-2);
var hh_00 = ('0' + hh).slice(-2);
var min_00 = ('0' + min).slice(-2);
var ss_00 = ('0' + ss).slice(-2);

var yyyyddmm = () => {
  return "".concat(yyyy).concat(mm_00).concat(dd_00);
};

var yyyy_dd_mm = () => {
  return "".concat(yyyy).concat('-').concat(mm_00).concat('-').concat(dd_00);
};

var yyyysddsmm = () => {
  return "".concat(yyyy).concat('/').concat(mm_00).concat('/').concat(dd_00);
};

var ddmmyyyy = () => {
  return "".concat(dd_00).concat(mm_00).concat(yyyy);
};

var dd_mm_yyyy = () => {
  return "".concat(dd_00).concat('-').concat(mm_00).concat('-').concat(yyyy);
};

var ddsmmsyyyy = () => {
  return "".concat(dd_00).concat('/').concat(mm_00).concat('/').concat(yyyy);
};

var mmddyyyy = () => {
  return "".concat(mm_00).concat(dd_00).concat(yyyy);
};

var mm_dd_yyyy = () => {
  return "".concat(mm_00).concat('-').concat(dd_00).concat('-').concat(yyyy);
};

var mmsddsyyyy = () => {
  return "".concat(mm_00).concat('/').concat(dd_00).concat('/').concat(yyyy);
};

var hhmm = () => {
  return "".concat(hh_00).concat(':').concat(min_00);
};

var hhmmss = () => {
  return "".concat(hh_00).concat(':').concat(min_00).concat(':').concat(ss_00);
};

module.exports = yyyyddmm;
module.exports = yyyy_dd_mm;
module.exports = yyyysddsmm;
module.exports = ddmmyyyy;
module.exports = dd_mm_yyyy;
module.exports = ddsmmsyyyy;
module.exports = mmddyyyy;
module.exports = mm_dd_yyyy;
module.exports = mmsddsyyyy;
module.exports = hhmm;
module.exports = hhmmss;

console.log(yyyyddmm());
console.log(yyyy_dd_mm());
console.log(yyyysddsmm());
console.log(ddmmyyyy());
console.log(dd_mm_yyyy());
console.log(ddsmmsyyyy());
console.log(mmddyyyy());
console.log(mm_dd_yyyy());
console.log(mmsddsyyyy());
console.log(hhmm());
console.log(hhmmss());