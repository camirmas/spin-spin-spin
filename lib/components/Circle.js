"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0%, 100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"], ["\n  0%, 100% {\n    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);\n  }\n  0% {\n    transform: rotateY(0deg);\n  }\n  50% {\n    transform: rotateY(1800deg);\n    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);\n  }\n  100% {\n    transform: rotateY(3600deg);\n  }\n"])));
var Circle = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  background: #fff;\n  animation: ", " 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"], ["\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  margin: 8px;\n  border-radius: 50%;\n  background: #fff;\n  animation: ", " 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n"])), animation);
exports.default = Circle;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Circle.js.map