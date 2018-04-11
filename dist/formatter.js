"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
exports.yyyy = (d) => d.getFullYear().toString();
exports.mm = (d) => ('0' + (d.getMonth() + 1)).slice(-2);
exports.dd = (d) => ('0' + d.getDate()).slice(-2);
exports.hh12 = (d) => ('0' + d.getHours() % 12).slice(-2);
exports.hh24 = (d) => ('0' + d.getHours()).slice(-2);
exports.min = (d) => ('0' + d.getMinutes()).slice(-2);
exports.ss = (d) => ('0' + d.getSeconds()).slice(-2);
exports.dateToStr = (formatter, d = new Date()) => {
    switch (formatter) {
        case index_1.strFormat.yyyymmdd:
            return `${exports.yyyy(d)}${exports.mm(d)}${exports.dd(d)}`;
        case index_1.strFormat.yyyymmddSlash:
            return `${exports.yyyy(d)}/${exports.mm(d)}/${exports.dd(d)}`;
        case index_1.strFormat.yyyymmddHyphen:
            return `${exports.yyyy(d)}-${exports.mm(d)}-${exports.dd(d)}`;
        case index_1.strFormat.mmddyyyy:
            return `${exports.mm(d)}${exports.dd(d)}${exports.yyyy(d)}`;
        case index_1.strFormat.mmddyyyySlash:
            return `${exports.mm(d)}/${exports.dd(d)}/${exports.yyyy(d)}`;
        case index_1.strFormat.mmddyyyyHyphen:
            return `${exports.mm(d)}-${exports.dd(d)}-${exports.yyyy(d)}`;
        case index_1.strFormat.ddmmyyyy:
            return `${exports.dd(d)}${exports.mm(d)}${exports.yyyy(d)}`;
        case index_1.strFormat.ddmmyyyySlash:
            return `${exports.dd(d)}/${exports.mm(d)}/${exports.yyyy(d)}`;
        case index_1.strFormat.ddmmyyyyHyphen:
            return `${exports.dd(d)}-${exports.mm(d)}-${exports.yyyy(d)}`;
        default:
            return '';
    }
};
exports.timeToStr = (formatter, d = new Date()) => {
    switch (formatter) {
        case index_1.strFormat.hhmmss12:
            return `${exports.hh12(d)}:${exports.min(d)}:${exports.ss(d)}`;
        case index_1.strFormat.hhmmss24:
            return `${exports.hh24(d)}:${exports.min(d)}:${exports.ss(d)}`;
        case index_1.strFormat.hhmm12:
            return `${exports.hh12(d)}:${exports.min(d)}`;
        case index_1.strFormat.hhmm24:
            return `${exports.hh24(d)}:${exports.min(d)}`;
        default:
            return '';
    }
};
exports.strToDate = (str, formatter = index_1.strFormat.yyyymmdd.toString()) => {
    let year, month, day;
    switch (formatter) {
        case index_1.strFormat.yyyymmdd:
        default: {
            year = str.slice(0, 4);
            month = str.slice(4, 6);
            day = str.slice(-2);
            break;
        }
        case index_1.strFormat.yyyymmddSlash:
        case index_1.strFormat.yyyymmddHyphen: {
            year = str.slice(0, 4);
            month = str.slice(5, 7);
            day = str.slice(-2);
            break;
        }
        case index_1.strFormat.mmddyyyy: {
            year = str.slice(-4);
            month = str.slice(0, 2);
            day = str.slice(2, 4);
            break;
        }
        case index_1.strFormat.mmddyyyySlash:
        case index_1.strFormat.mmddyyyyHyphen: {
            year = str.slice(-4);
            month = str.slice(0, 2);
            day = str.slice(3, 5);
            break;
        }
        case index_1.strFormat.ddmmyyyy: {
            year = str.slice(-4);
            month = str.slice(2, 4);
            day = str.slice(0, 2);
            break;
        }
        case index_1.strFormat.ddmmyyyySlash:
        case index_1.strFormat.ddmmyyyyHyphen: {
            year = str.slice(-4);
            month = str.slice(3, 5);
            day = str.slice(0, 2);
            break;
        }
    }
    return new Date(+year, +month - 1, +day);
};
exports.strDateReformat = (str, fromFormatter, toFormatter) => {
    let newDate = exports.strToDate(str, fromFormatter);
    let newFormat = exports.dateToStr(toFormatter, newDate);
    return newFormat;
};
