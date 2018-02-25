"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.iterateDaysOnDateToDate = (startDate, endDay) => {
    let result = [];
    let year = index_1.yyyy(startDate);
    let month = index_1.mm(startDate);
    let date = index_1.dd(startDate);
    let dateToStart = new Date(+year, +month - 1, +date);
    for (let d = dateToStart; d <= endDay; d.setDate(d.getDate() + 1)) {
        let _d = new Date(d);
        result.push(_d);
    }
    return result;
};
exports.iterateDaysOnStrToStr = (strStartDate, strEndDate, fromFormatter = index_1.strFormat.yyyymmdd.toString(), toFormatter = fromFormatter) => {
    let result = [];
    let startDate = index_1.strToDate(strStartDate, fromFormatter);
    let endDay = index_1.strToDate(strEndDate, fromFormatter);
    for (let d = startDate; d <= endDay; d.setDate(d.getDate() + 1)) {
        let nextDateStr = index_1.dateToStr(toFormatter, d);
        result.push(nextDateStr);
    }
    return result;
};
