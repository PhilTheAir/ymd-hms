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

var ymd = {
  yyyyddmm : () => {
    return "".concat(yyyy).concat(mm_00).concat(dd_00);
  },

  yyyy_dd_mm : () => {
    return "".concat(yyyy).concat('-').concat(mm_00).concat('-').concat(dd_00);
  },

  yyyysddsmm : () => {
    return "".concat(yyyy).concat('/').concat(mm_00).concat('/').concat(dd_00);
  },

  ddmmyyyy : () => {
    return "".concat(dd_00).concat(mm_00).concat(yyyy);
  },

  dd_mm_yyyy : () => {
    return "".concat(dd_00).concat('-').concat(mm_00).concat('-').concat(yyyy);
  },

  ddsmmsyyyy : () => {
    return "".concat(dd_00).concat('/').concat(mm_00).concat('/').concat(yyyy);
  },

  mmddyyyy : () => {
    return "".concat(mm_00).concat(dd_00).concat(yyyy);
  },

  mm_dd_yyyy : () => {
    return "".concat(mm_00).concat('-').concat(dd_00).concat('-').concat(yyyy);
  },

  mmsddsyyyy : () => {
    return "".concat(mm_00).concat('/').concat(dd_00).concat('/').concat(yyyy);
  }
}

function hms () {
  
}

hms.prototype.hhmm = () => {
  return "".concat(hh_00).concat(':').concat(min_00);
};  

hms.prototype.hhmmss = () => {
  return "".concat(hh_00).concat(':').concat(min_00).concat(':').concat(ss_00);
};

exports.ymd = ymd;
exports.hms = hms;