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
import { forwardRef } from "react";
import { styled } from "@tamagui/core";
import { getIcon } from "../provider";
const _Icon = forwardRef((_a, ref) => {
    var { name, color } = _a, props = __rest(_a, ["name", "color"]);
    const Comp = getIcon(name || "default");
    if (!Comp)
        return null;
    const { style: { width, height, stroke = "none", fill = "none" } = {} } = (props || {});
    return _jsx(Comp, Object.assign({ ref: undefined, color, width, height, stroke, fill }, props));
});
export const Icon = styled(_Icon, {
    name: "Icon",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    flexShrink: 0,
    variants: {
        size: {
            "$sm": {
                width: 14,
                height: 14,
            },
            "$md": {
                width: 16,
                height: 16,
            },
            "$lg": {
                width: 20,
                height: 20,
            },
        },
    },
    defaultVariants: { size: "$md" }
}, {
    accept: { color: 'color' }
});
//# sourceMappingURL=index.js.map