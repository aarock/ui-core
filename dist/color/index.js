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
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful";
import { styled } from "@tamagui/core";
export const ColorPicker = styled(HexColorPicker, {
    name: 'ColorPicker',
    display: "flex",
    borderRadius: 0,
    flexGrow: 1,
});
export function Color(_a) {
    var { value, hasPrefix, hasAlpha, 
    // swatches,
    onValueChange } = _a, rest = __rest(_a, ["value", "hasPrefix", "hasAlpha", "onValueChange"]);
    const Component = hasAlpha ? HexAlphaColorPicker : HexColorPicker;
    return _jsx(Component, Object.assign({ color: value, 
        // @ts-ignore
        prefixed: hasPrefix, onChange: onValueChange }, rest));
}
//# sourceMappingURL=index.js.map