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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ColorPickerBase, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';
import { styled } from '@tamagui/core';
export const ColorPicker = styled(ColorPickerBase, {
    name: 'ColorPicker',
    display: "flex",
    borderRadius: 0,
    flexGrow: 1,
});
export function Color(_a) {
    var { value, hasAlpha, swatches, onValueChange } = _a, rest = __rest(_a, ["value", "hasAlpha", "swatches", "onValueChange"]);
    const hasSwatches = !!(swatches === null || swatches === void 0 ? void 0 : swatches.length);
    const onSelectColor = ({ hex }) => {
        "worklet";
        onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(hex);
    };
    return _jsxs(ColorPicker, Object.assign({ value: value, onComplete: onSelectColor }, rest, { children: [_jsx(Preview, {}), _jsx(Panel1, {}), _jsx(HueSlider, {}), hasAlpha && _jsx(OpacitySlider, {}), hasSwatches && _jsx(Swatches, { colors: swatches })] }));
}
//# sourceMappingURL=index.native.js.map