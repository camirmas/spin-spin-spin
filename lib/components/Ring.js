"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var RingStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #fff;\n    border-radius: 50%;\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid #fff;\n    border-radius: 50%;\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #fff transparent transparent transparent;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.45s;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.15s;\n  }\n"])), animation);
var Ring = function () { return (React.createElement(RingStyles, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Ring;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Ring.js.map