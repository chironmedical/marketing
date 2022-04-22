var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { action } from '@storybook/addon-actions';
import { Button } from "../components/Button";
export default {
    title: 'Button',
    component: Button,
};
export var Default = function () { return _jsx(Button, __assign({ onClick: action('clicked') }, { children: "Default Button" })); };
