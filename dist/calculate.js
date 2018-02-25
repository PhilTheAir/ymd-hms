"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.strDateAddNum = (strDate, fromFormatter, days) => {
    let newDate = index_1.strToDate(strDate, fromFormatter);
    newDate.setDate(newDate.getDate() + days);
    let result = index_1.dateToStr(fromFormatter, newDate);
    return result;
};
exports.subtractStrDate = (dateStr1, dateStr2, formatter1 = index_1.strFormat.yyyymmdd.toString(), formatter2 = formatter1) => {
    let date1 = +index_1.strToDate(dateStr1, formatter1);
    let date2 = +index_1.strToDate(dateStr2, formatter2);
    let timeDiff = Math.abs(date1 - date2);
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
};
