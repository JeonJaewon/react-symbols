"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrossSign = exports.PlusSign = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = __importStar(require("styled-components"));
var S = {
    PlusSignWrapper: styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: inline-block;\n    position: relative;\n    font-size: ", ";\n    width: ", ";\n    height: ", ";\n    cursor: pointer;\n    \n    &::before, &::after {\n      position: absolute;\n      border-radius: 10px;\n      background-color: ", ";\n      content: ' ';\n      transition: all 0.4s;\n    };\n    &::before { \n      top: 0;\n      height: 1em;\n    };\n    &::after {\n      left: 0;\n      width: 1em;\n    };\n    ", ";\n  "], ["\n    display: inline-block;\n    position: relative;\n    font-size: ", ";\n    width: ", ";\n    height: ", ";\n    cursor: pointer;\n    \n    &::before, &::after {\n      position: absolute;\n      border-radius: 10px;\n      background-color: ", ";\n      content: ' ';\n      transition: all 0.4s;\n    };\n    &::before { \n      top: 0;\n      height: 1em;\n    };\n    &::after {\n      left: 0;\n      width: 1em;\n    };\n    ",
        ";\n  "])), function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.size; }, function (props) { return props.color; }, function (props) {
        var result = calculateStyle(props.weight);
        return styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        &::before {\n          left: ", "em;\n          width: ", "em;\n        };\n        &::after {\n          top: ", "em;\n          height: ", "em;\n        };\n      "], ["\n        &::before {\n          left: ", "em;\n          width: ", "em;\n        };\n        &::after {\n          top: ", "em;\n          height: ", "em;\n        };\n      "])), result.offset, result.thickness, result.offset, result.thickness);
    }),
};
var calculateStyle = function (weight) {
    if (weight === void 0) { weight = 1; }
    var thickness = 0.2 * weight;
    var offset = 0.5 - (thickness / 2);
    return { thickness: thickness, offset: offset };
};
exports.PlusSign = react_1.forwardRef(function PlusSign(_a, ref) {
    var size = _a.size, _b = _a.color, color = _b === void 0 ? '#F1F3F4' : _b, _c = _a.weight, weight = _c === void 0 ? 1 : _c, props = __rest(_a, ["size", "color", "weight"]);
    return (react_1.default.createElement(S.PlusSignWrapper, __assign({ size: size, color: color, weight: weight, ref: ref }, props)));
});
var CrossSignWrapper = styled_components_1.default(S.PlusSignWrapper)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &::before, &::after {\n    transform: rotate(45deg);\n  }\n"], ["\n  &::before, &::after {\n    transform: rotate(45deg);\n  }\n"])));
var CrossSign = function (_a) {
    var size = _a.size, _b = _a.color, color = _b === void 0 ? '#F1F3F4' : _b, _c = _a.weight, weight = _c === void 0 ? 1 : _c, props = __rest(_a, ["size", "color", "weight"]);
    return (react_1.default.createElement(CrossSignWrapper, __assign({ size: size, color: color, weight: weight }, props)));
};
exports.CrossSign = CrossSign;
var templateObject_1, templateObject_2, templateObject_3;
