"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n"])));
var RippleStyles = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ", " 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n"], ["\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n\n  div {\n    position: absolute;\n    border: 4px solid #fff;\n    opacity: 1;\n    border-radius: 50%;\n    animation: ", " 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n  }\n  div:nth-child(2) {\n    animation-delay: -0.5s;\n  }\n"])), animation);
var Ripple = function () { return (React.createElement(RippleStyles, null,
    React.createElement("div", null),
    React.createElement("div", null))); };
exports.default = Ripple;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Ripple.js.map