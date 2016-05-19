Date.prototype.mm = Date.prototype.mm || function() {
    return ('0' + (this.getMonth() + 1)).slice(-2);
}

Date.prototype.dd = Date.prototype.dd || function() {
    return ('0' + this.getDate()).slice(-2);
}

Date.prototype.hh = Date.prototype.hh || function() {
    return ('0' + this.getHours()).slice(-2);
}

Date.prototype.min = Date.prototype.min || function() {
    return ('0' + this.getMinutes()).slice(-2);
}

Date.prototype.ss = Date.prototype.ss || function() {
    return ('0' + this.getSeconds()).slice(-2);
}

Date.prototype.yyyymmdd = Date.prototype.yyyymmdd || function() {
    return "".concat(this.getFullYear()).concat(this.mm()).concat(this.dd());
};

Date.prototype.yyyy_mm_dd = Date.prototype.yyyy_mm_dd || function() {
    var d = new Date();
    return "".concat(this.getFullYear()).concat('-').concat(this.mm()).concat('-').concat(this.dd());
};

Date.prototype.yyyysmmsdd = Date.prototype.yyyysmmsdd || function() {
    return "".concat(this.getFullYear()).concat('/').concat(this.mm()).concat('/').concat(this.dd());
};

Date.prototype.mmddyyyy = Date.prototype.mmddyyyy || function() {
    return "".concat(this.mm()).concat(this.dd()).concat(this.getFullYear());
};

Date.prototype.mm_dd_yyyy = Date.prototype.mm_dd_yyyy || function() {
    return "".concat(this.mm()).concat('-').concat(this.dd()).concat('-').concat(this.getFullYear());
};

Date.prototype.mmsddsyyyy = Date.prototype.mmsddsyyyy || function() {
    return "".concat(this.mm()).concat('/').concat(this.dd()).concat('/').concat(this.getFullYear());
};

Date.prototype.ddmmyyyy = Date.prototype.ddmmyyyy || function() {
    return "".concat(this.dd()).concat(this.mm()).concat(this.getFullYear());
};

Date.prototype.dd_mm_yyyy = Date.prototype.dd_mm_yyyy || function() {
    return "".concat(this.dd()).concat('-').concat(this.mm()).concat('-').concat(this.getFullYear());
};

Date.prototype.ddsmmsyyyy = Date.prototype.ddsmmsyyyy || function() {
    return "".concat(this.dd()).concat('/').concat(this.mm()).concat('/').concat(this.getFullYear());
};

Date.prototype.hhmm = Date.prototype.hhmm || function() {
    return "".concat(this.hh()).concat(':').concat(this.min());
};  

Date.prototype.hhmmss = Date.prototype.hhmmss || function() {
    return "".concat(this.hh()).concat(':').concat(this.min()).concat(':').concat(this.ss());
};

var nDaysAgo = function(n) {
    var d = new Date();
    d.setDate(d.getDate() - n);
    return d;
}

exports.nDaysAgo = nDaysAgo;
exports.yyyymmdd = Date.prototype.yyyymmdd;
exports.yyyy_mm_dd = Date.prototype.yyyy_mm_dd;
exports.yyyysmmsdd = Date.prototype.yyyysmmsdd;
exports.mmddyyyy = Date.prototype.mmddyyyy;
exports.mm_dd_yyyy = Date.prototype.mm_dd_yyyy;
exports.mmsddsyyyy = Date.prototype.mmsddsyyyy;
exports.ddmmyyyy = Date.prototype.ddmmyyyy;
exports.dd_mm_yyyy = Date.prototype.dd_mm_yyyy;
exports.ddsmmsyyyy = Date.prototype.ddsmmsyyyy;
exports.hhmm = Date.prototype.hhmm;
exports.hhmmss = Date.prototype.hhmmss;