"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n"], ["\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n"])));
var FacebookStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: #fff;\n    animation: ", " 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  div:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  div:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  div:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    display: inline-block;\n    position: absolute;\n    left: 8px;\n    width: 16px;\n    background: #fff;\n    animation: ", " 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n  }\n  div:nth-child(1) {\n    left: 8px;\n    animation-delay: -0.24s;\n  }\n  div:nth-child(2) {\n    left: 32px;\n    animation-delay: -0.12s;\n  }\n  div:nth-child(3) {\n    left: 56px;\n    animation-delay: 0;\n  }\n"])), animation);
var Facebook = function () { return (React.createElement(FacebookStyles, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Facebook;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Facebook.js.map