"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldComponentUpdatePrototype = void 0;
var methods_1 = require("../methods");
var React = require("react");
var shouldComponentUpdatePrototype = function (that) {
    var proto = Object.getPrototypeOf(that);
    var _a = __read(React.version.split('.').map(function (v) { return parseInt(v); }), 2), rVerMaj = _a[0], rVerMin = _a[1];
    if (Object.prototype.hasOwnProperty.call(proto, 'shouldComponentUpdate')
        && ((rVerMaj > 16 || (rVerMaj === 16 && rVerMin >= 3)))) {
        that.shouldComponentUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (0, methods_1.ReactNShouldComponentUpdate)(that);
            return proto.shouldComponentUpdate.bind(that).apply(void 0, __spreadArray([], __read(args), false));
        };
        return true;
    }
    return false;
};
exports.shouldComponentUpdatePrototype = shouldComponentUpdatePrototype;
