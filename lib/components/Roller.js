"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var RollerStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  div:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #fff;\n    margin: -4px 0 0 -4px;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    animation: ", " 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    transform-origin: 40px 40px;\n  }\n  div:after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    width: 7px;\n    height: 7px;\n    border-radius: 50%;\n    background: #fff;\n    margin: -4px 0 0 -4px;\n  }\n  div:nth-child(1) {\n    animation-delay: -0.036s;\n  }\n  div:nth-child(1):after {\n    top: 63px;\n    left: 63px;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.072s;\n  }\n  div:nth-child(2):after {\n    top: 68px;\n    left: 56px;\n  }\n  div:nth-child(3) {\n    animation-delay: -0.108s;\n  }\n  div:nth-child(3):after {\n    top: 71px;\n    left: 48px;\n  }\n  div:nth-child(4) {\n    animation-delay: -0.144s;\n  }\n  div:nth-child(4):after {\n    top: 72px;\n    left: 40px;\n  }\n  div:nth-child(5) {\n    animation-delay: -0.18s;\n  }\n  div:nth-child(5):after {\n    top: 71px;\n    left: 32px;\n  }\n  div:nth-child(6) {\n    animation-delay: -0.216s;\n  }\n  div:nth-child(6):after {\n    top: 68px;\n    left: 24px;\n  }\n  div:nth-child(7) {\n    animation-delay: -0.252s;\n  }\n  div:nth-child(7):after {\n    top: 63px;\n    left: 17px;\n  }\n  div:nth-child(8) {\n    animation-delay: -0.288s;\n  }\n  div:nth-child(8):after {\n    top: 56px;\n    left: 12px;\n  }\n"])), animation);
var Roller = function () { return (React.createElement(RollerStyles, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Roller;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Roller.js.map