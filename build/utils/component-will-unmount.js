"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentWillUnmountPrototype = void 0;
var methods_1 = require("../methods");
var componentWillUnmountPrototype = function (that) {
    var proto = Object.getPrototypeOf(that);
    if (Object.prototype.hasOwnProperty.call(proto, 'componentWillUnmount')) {
        that.componentWillUnmount = function () {
            (0, methods_1.ReactNComponentWillUnmount)(that);
            proto.componentWillUnmount.bind(that)();
        };
        return true;
    }
    return false;
};
exports.componentWillUnmountPrototype = componentWillUnmountPrototype;
