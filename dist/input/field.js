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
import { useContext } from "react";
import { styled, Text } from "@tamagui/core";
import { Context, StyledContext } from "./context";
const InputFieldBase = styled(Text, {
    tag: "input",
    context: StyledContext,
    flex: 1,
    minWidth: 0,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    variants: {
        variant: {
            default: {
                color: "$neutral12",
                hoverStyle: { color: "$neutral12" },
                focusStyle: { color: "$neutral12" },
            },
            mute: {
                color: "$neutral8",
                hoverStyle: { color: "$neutral8" },
                focusStyle: { color: "$neutral8" },
            },
        },
        size: {
            "$sm": {
                py: "$sm",
                fontSize: 14,
                minHeight: 14 + 2 * 8,
            },
            "$md": {
                py: "$md",
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$lg": {
                py: "$lg",
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            },
            // "...size": ( size, { tokens } ) => ( {
            //     minHeight: ( tokens?.size[ size ].val || 0 ) + ( tokens?.space[ size ].val || 0 ),
            // } )
        }
    },
    defaultVariants: { variant: "default" }
}, {
    accept: { placeholderColor: "color" },
    defaultProps: { placeholder: "" },
});
export const InputField = InputFieldBase.styleable((_a) => {
    var { onChange } = _a, props = __rest(_a, ["onChange"]);
    const { value, onValueChange } = useContext(Context);
    return _jsx(InputFieldBase, Object.assign({ value: value, 
        //@ts-ignore
        onChange: event => {
            const value = event.target.value;
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(value);
        } }, props));
});
//# sourceMappingURL=field.js.map