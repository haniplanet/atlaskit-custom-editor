"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var editor_core_1 = require("@atlaskit/editor-core");
var MasterTemp = React.memo(function () {
    return (React.createElement("div", null, editor_core_1.Editor));
});
exports.default = MasterTemp;