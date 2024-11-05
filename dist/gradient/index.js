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
import { styled, useProps, useTheme } from '@tamagui/core';
import { YStack } from '../box';
import { LinearGradient as LinearGradientBase } from './linear-gradient';
const GradientFrame = styled(YStack, {
    name: 'Gradient',
    overflow: 'hidden',
    position: 'relative',
});
export const Gradient = GradientFrame.styleable((propsIn, ref) => {
    var _a;
    const props = useProps(propsIn);
    const { start, end, colors: colorsProp, locations, children } = props, stackProps = __rest(props, ["start", "end", "colors", "locations", "children"]);
    const theme = useTheme();
    let colors = ((_a = props.colors) === null || _a === void 0 ? void 0 : _a.map((c) => {
        var _a, _b;
        return (_b = (_a = theme[c]) === null || _a === void 0 ? void 0 : _a.get('web')) !== null && _b !== void 0 ? _b : c;
    })) || [];
    return (_jsxs(GradientFrame, Object.assign({ ref: ref }, stackProps, { children: [_jsx(LinearGradientBase
            //@ts-ignore
            , { 
                //@ts-ignore
                start: start, 
                //@ts-ignore
                end: end, colors: colors, locations: locations, style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 0,
                } }), children] })));
});
//# sourceMappingURL=index.js.map