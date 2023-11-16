"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactNPureComponent = exports.ReactNComponent = void 0;
var React = require("react");
var methods_1 = require("./methods");
var bind_lifecycle_methods_1 = require("./utils/bind-lifecycle-methods");
var isComponentDidMount = false;
var isComponentDidUpdate = false;
var isSetGlobalCallback = false;
var ReactPureComponent = React.PureComponent || React.Component;
var ReactNComponent = (function (_super) {
    __extends(ReactNComponent, _super);
    function ReactNComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        (0, bind_lifecycle_methods_1.default)(_this);
        return _this;
    }
    Object.defineProperty(ReactNComponent.prototype, "dispatch", {
        get: function () {
            return (0, methods_1.ReactNDispatch)();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactNComponent.prototype, "global", {
        get: function () {
            return (0, methods_1.ReactNGlobal)(this);
        },
        enumerable: false,
        configurable: true
    });
    ReactNComponent.prototype.setGlobal = function (newGlobalState, callback) {
        if (callback === void 0) { callback = null; }
        return (0, methods_1.ReactNSetGlobal)(newGlobalState, callback, !isComponentDidMount &&
            !isComponentDidUpdate &&
            !isSetGlobalCallback);
    };
    ReactNComponent.prototype._globalCallback = function () {
        return (0, methods_1.ReactNGlobalCallback)(this);
    };
    return ReactNComponent;
}(React.Component));
exports.ReactNComponent = ReactNComponent;
;
var ReactNPureComponent = (function (_super) {
    __extends(ReactNPureComponent, _super);
    function ReactNPureComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._globalCallback = _this._globalCallback.bind(_this);
        (0, bind_lifecycle_methods_1.default)(_this);
        return _this;
    }
    Object.defineProperty(ReactNPureComponent.prototype, "dispatch", {
        get: function () {
            return (0, methods_1.ReactNDispatch)();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactNPureComponent.prototype, "global", {
        get: function () {
            return (0, methods_1.ReactNGlobal)(this);
        },
        enumerable: false,
        configurable: true
    });
    ReactNPureComponent.prototype.setGlobal = function (newGlobalState, callback) {
        if (callback === void 0) { callback = null; }
        return (0, methods_1.ReactNSetGlobal)(newGlobalState, callback, !isComponentDidMount &&
            !isComponentDidUpdate &&
            !isSetGlobalCallback);
    };
    ReactNPureComponent.prototype._globalCallback = function () {
        return (0, methods_1.ReactNGlobalCallback)(this);
    };
    return ReactNPureComponent;
}(ReactPureComponent));
exports.ReactNPureComponent = ReactNPureComponent;
;
