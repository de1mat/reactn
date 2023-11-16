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
var react_1 = require("react");
var methods_1 = require("./methods");
var isComponentDidMount = false;
var isComponentDidUpdate = false;
var isSetGlobalCallback = false;
var _a = __read(react_1.version.split('.').map(function (v) { return parseInt(v); }), 2), rVerMaj = _a[0], rVerMin = _a[1];
var isUsingOldReact = rVerMaj < 16 || (rVerMaj === 16 && rVerMin < 3);
var componentName = function (DecoratedComponent) {
    return typeof DecoratedComponent === 'string' ?
        DecoratedComponent :
        DecoratedComponent.displayName ||
            DecoratedComponent.name;
};
function ReactN(DecoratedComponent) {
    var DecoratedReactNComponent = (function (_super) {
        __extends(DecoratedReactNComponent, _super);
        function DecoratedReactNComponent(props, context) {
            var _this = _super.call(this, props, context) || this;
            _this._globalCallback = _this._globalCallback.bind(_this);
            return _this;
        }
        DecoratedReactNComponent.prototype.componentWillUnmount = function () {
            (0, methods_1.ReactNComponentWillUnmount)(this);
            if (_super.prototype.componentWillUnmount) {
                _super.prototype.componentWillUnmount.call(this);
            }
        };
        DecoratedReactNComponent.prototype.componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isUsingOldReact) {
                (0, methods_1.ReactNComponentWillUpdate)(this);
            }
            if (_super.prototype.componentWillUpdate) {
                _super.prototype.componentWillUpdate.apply(this, __spreadArray([], __read(args), false));
            }
        };
        DecoratedReactNComponent.prototype.UNSAFE_componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!isUsingOldReact) {
                (0, methods_1.ReactNComponentWillUpdate)(this);
            }
            if (_super.prototype.UNSAFE_componentWillUpdate) {
                _super.prototype.UNSAFE_componentWillUpdate.apply(this, __spreadArray([], __read(args), false));
            }
        };
        Object.defineProperty(DecoratedReactNComponent.prototype, "dispatch", {
            get: function () {
                return (0, methods_1.ReactNDispatch)();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(DecoratedReactNComponent.prototype, "global", {
            get: function () {
                return (0, methods_1.ReactNGlobal)(this);
            },
            enumerable: false,
            configurable: true
        });
        DecoratedReactNComponent.prototype.setGlobal = function (newGlobalState, callback) {
            if (callback === void 0) { callback = null; }
            return (0, methods_1.ReactNSetGlobal)(newGlobalState, callback, !isComponentDidMount &&
                !isComponentDidUpdate &&
                !isSetGlobalCallback);
        };
        DecoratedReactNComponent.prototype._globalCallback = function () {
            return (0, methods_1.ReactNGlobalCallback)(this);
        };
        DecoratedReactNComponent.displayName = "".concat(componentName(DecoratedComponent), "-ReactN");
        return DecoratedReactNComponent;
    }(DecoratedComponent));
    return DecoratedReactNComponent;
}
exports.default = ReactN;
;
