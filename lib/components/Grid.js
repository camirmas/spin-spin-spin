"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n"], ["\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n"])));
var GridStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #fff;\n    animation: ", " 1.2s linear infinite;\n  }\n  div:nth-child(1) {\n    top: 8px;\n    left: 8px;\n    animation-delay: 0s;\n  }\n  div:nth-child(2) {\n    top: 8px;\n    left: 32px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(3) {\n    top: 8px;\n    left: 56px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(4) {\n    top: 32px;\n    left: 8px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(5) {\n    top: 32px;\n    left: 32px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(6) {\n    top: 32px;\n    left: 56px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(7) {\n    top: 56px;\n    left: 8px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(8) {\n    top: 56px;\n    left: 32px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(9) {\n    top: 56px;\n    left: 56px;\n    animation-delay: -1.6s;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background: #fff;\n    animation: ", " 1.2s linear infinite;\n  }\n  div:nth-child(1) {\n    top: 8px;\n    left: 8px;\n    animation-delay: 0s;\n  }\n  div:nth-child(2) {\n    top: 8px;\n    left: 32px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(3) {\n    top: 8px;\n    left: 56px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(4) {\n    top: 32px;\n    left: 8px;\n    animation-delay: -0.4s;\n  }\n  div:nth-child(5) {\n    top: 32px;\n    left: 32px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(6) {\n    top: 32px;\n    left: 56px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(7) {\n    top: 56px;\n    left: 8px;\n    animation-delay: -0.8s;\n  }\n  div:nth-child(8) {\n    top: 56px;\n    left: 32px;\n    animation-delay: -1.2s;\n  }\n  div:nth-child(9) {\n    top: 56px;\n    left: 56px;\n    animation-delay: -1.6s;\n  }\n"])), animation);
var Grid = function () { return (React.createElement(GridStyles, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Grid;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Grid.js.map