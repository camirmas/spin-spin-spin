"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var animation = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var DualRing = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n\n  :after {\n    content: \" \";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"], ["\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n\n  :after {\n    content: \" \";\n    display: block;\n    width: 46px;\n    height: 46px;\n    margin: 1px;\n    border-radius: 50%;\n    border: 5px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: ", " 1.2s linear infinite;\n  }\n"])), animation);
exports.default = DualRing;
var templateObject_1, templateObject_2;
//# sourceMappingURL=DualRing.js.map