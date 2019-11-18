"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation1 = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n"], ["\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n"])));
var animation2 = styled_components_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n"], ["\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n"])));
var animation3 = styled_components_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"], ["\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n"])));
var EllipsisStyles = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  div:nth-child(1) {\n    left: 8px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(2) {\n    left: 8px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(3) {\n    left: 32px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(4) {\n    left: 56px;\n    animation: ", " 0.6s infinite;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    top: 33px;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    background: #fff;\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\n  }\n  div:nth-child(1) {\n    left: 8px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(2) {\n    left: 8px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(3) {\n    left: 32px;\n    animation: ", " 0.6s infinite;\n  }\n  div:nth-child(4) {\n    left: 56px;\n    animation: ", " 0.6s infinite;\n  }\n"])), animation1, animation2, animation2, animation3);
var Ellipsis = function () { return (React.createElement(EllipsisStyles, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Ellipsis;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Ellipsis.js.map