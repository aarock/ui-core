var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { styled, Text } from '@tamagui/core';
import { Context, StyledContext } from "./context";
const TextAreaFieldBase = styled(Text, {
    tag: "textarea",
    context: StyledContext,
    flex: 1,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    variants: {
        variant: {
            default: {
                color: '$neutral12',
                hoverStyle: { color: '$neutral12' },
                focusStyle: { color: '$neutral12' },
            },
            mute: {
                color: '$neutral8',
                hoverStyle: { color: '$neutral8' },
                focusStyle: { color: '$neutral8' },
            },
        },
        size: {
            "$sm": {
                py: "$sm",
                pr: "$sm",
                fontSize: 14,
                minHeight: 14 + 2 * 8,
            },
            "$md": {
                py: "$md",
                pr: "$md",
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$lg": {
                py: "$lg",
                pr: "$lg",
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            }
        }
    },
    defaultVariants: { variant: 'default' }
}, {
    accept: { placeholderColor: 'color' },
    defaultProps: { placeholder: '', resize: 'vertical' },
});
export const TextAreaField = TextAreaFieldBase.styleable((_a, ref) => {
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const { value, onValueChange } = useContext(Context);
    return _jsx(TextAreaFieldBase, Object.assign({ ref: ref, value: value, 
        //@ts-ignore
        onChange: event => {
            const value = event.target.value;
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(value);
        } }, props));
});
//# sourceMappingURL=field.js.map