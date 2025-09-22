"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
    static getYear(date) {
        return date.getFullYear();
    }
    static getMonth(date) {
        return ("0" + (date.getMonth() + 1)).slice(-2);
    }
    static getDay(date) {
        return ("0" + date.getDate()).slice(-2);
    }
    static addDays(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    }
    static isDate(date) {
        return date.match(/^\d{4}-\d{2}-\d{2}$/) != null;
    }
}
exports.default = default_1;
