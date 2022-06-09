"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.createTheme = exports.theme = exports.getCssText = exports.keyframes = exports.globalCss = exports.css = exports.styled = void 0;
var react_1 = require("@stitches/react");
exports.styled = (_a = (0, react_1.createStitches)({
    theme: {
        colors: {
            'deep-blue-100': '#8b9ab5',
            'deep-blue-200': '#2c577a',
            'deep-blue-300': '#134074',
            'deep-blue-400': '#143d66',
            'deep-blue-500': '#13315c',
            'deep-blue-600': '#0b2545',
            'light-blue-100': '#eff5fc',
            'light-blue-200': '#f7f8fc',
            'light-blue-300': '#ecf2fa',
            'light-blue-400': '#cad7e3',
            'light-blue-500': '#8da9c4',
            'whatsapp-green': '#075e54',
            'custom-grey-100': '#d9d9d9',
            'custom-grey-200': '#bfc0c0',
            'custom-grey-300': '#7f7f7f',
            'custom-grey-400': '#616160',
            'custom-grey-500': '#595757',
            'avatar-purple': '#f7f8fc',
        },
        radii: {
            custom: '22px'
        }
    },
    media: {
        bp1: '(min-width: 480px)',
    },
}), _a.styled), exports.css = _a.css, exports.globalCss = _a.globalCss, exports.keyframes = _a.keyframes, exports.getCssText = _a.getCssText, exports.theme = _a.theme, exports.createTheme = _a.createTheme, exports.config = _a.config;
