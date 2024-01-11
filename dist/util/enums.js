"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATUS = exports.HTTP = void 0;
var HTTP;
(function (HTTP) {
    HTTP[HTTP["OK"] = 200] = "OK";
    HTTP[HTTP["CREATED"] = 201] = "CREATED";
    HTTP[HTTP["ERROR"] = 404] = "ERROR";
})(HTTP || (exports.HTTP = HTTP = {}));
var STATUS;
(function (STATUS) {
    STATUS["Admin"] = "admin";
    STATUS["Student"] = "student";
    STATUS["teacher"] = "teacher";
})(STATUS || (exports.STATUS = STATUS = {}));
