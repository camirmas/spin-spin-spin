"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n"], ["\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n"])));
var HeartStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  transform: rotate(45deg);\n  transform-origin: 40px 40px;\n\n  div {\n    top: 32px;\n    left: 32px;\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    background: #fff;\n    animation: ", " 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  div:after,\n  div:before {\n    content: ' ';\n    position: absolute;\n    display: block;\n    width: 32px;\n    height: 32px;\n    background: #fff;\n  }\n  div:before {\n    left: -24px;\n    border-radius: 50% 0 0 50%;\n  }\n  div:after {\n    top: -24px;\n    border-radius: 50% 50% 0 0;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n  transform: rotate(45deg);\n  transform-origin: 40px 40px;\n\n  div {\n    top: 32px;\n    left: 32px;\n    position: absolute;\n    width: 32px;\n    height: 32px;\n    background: #fff;\n    animation: ", " 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  div:after,\n  div:before {\n    content: ' ';\n    position: absolute;\n    display: block;\n    width: 32px;\n    height: 32px;\n    background: #fff;\n  }\n  div:before {\n    left: -24px;\n    border-radius: 50% 0 0 50%;\n  }\n  div:after {\n    top: -24px;\n    border-radius: 50% 50% 0 0;\n  }\n"])), animation);
var Heart = function () { return (React.createElement(HeartStyles, null,
    React.createElement("div", null))); };
exports.default = Heart;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Heart.js.map