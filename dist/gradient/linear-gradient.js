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
import { normalizeColor } from '@tamagui/core';
// copied from https://raw.githubusercontent.com/expo/expo/main/packages/expo-linear-gradient/src/LinearGradient.web.tsx
import * as React from 'react';
import { Box as View } from '../box';
export function LinearGradient(_a) {
    var { colors, locations, start, end } = _a, props = __rest(_a, ["colors", "locations", "start", "end"]);
    const [{ height, width }, setLayout] = React.useState({
        height: 1,
        width: 1,
    });
    const linearGradientBackgroundImage = React.useMemo(() => {
        return getLinearGradientBackgroundImage(
        // @ts-expect-error ok
        colors, locations, start, end, width, height);
    }, [colors, locations, start, end, width, height]);
    return (_jsx(View, Object.assign({}, props, { backgroundImage: linearGradientBackgroundImage, onLayout: (event) => {
            const { width, height } = event.nativeEvent.layout;
            setLayout((oldLayout) => {
                // don't set new layout state unless the layout has actually changed
                if (width !== oldLayout.width || height !== oldLayout.height) {
                    return { height, width };
                }
                return oldLayout;
            });
            if (props.onLayout) {
                props.onLayout(event);
            }
        } })));
}
function getLinearGradientBackgroundImage(colors, locations, startPoint, endPoint, width = 1, height = 1) {
    const gradientColors = calculateGradientColors(
    // @ts-expect-error TODO fix numbers
    colors, locations);
    const angle = calculatePseudoAngle(width, height, startPoint, endPoint);
    return `linear-gradient(${angle}deg, ${gradientColors.join(', ')})`;
}
function calculatePseudoAngle(width, height, startPoint, endPoint) {
    const getControlPoints = () => {
        let correctedStartPoint = [0, 0];
        if (Array.isArray(startPoint)) {
            correctedStartPoint = [
                startPoint[0] != null ? startPoint[0] : 0.0,
                startPoint[1] != null ? startPoint[1] : 0.0,
            ];
        }
        let correctedEndPoint = [0.0, 1.0];
        if (Array.isArray(endPoint)) {
            correctedEndPoint = [
                endPoint[0] != null ? endPoint[0] : 0.0,
                endPoint[1] != null ? endPoint[1] : 1.0,
            ];
        }
        return [correctedStartPoint, correctedEndPoint];
    };
    const [start, end] = getControlPoints();
    start[0] *= width;
    end[0] *= width;
    start[1] *= height;
    end[1] *= height;
    const py = end[1] - start[1];
    const px = end[0] - start[0];
    return 90 + (Math.atan2(py, px) * 180) / Math.PI;
}
function calculateGradientColors(colors, locations) {
    return colors.map((color, index) => {
        const output = normalizeColor(color);
        if (locations && locations[index]) {
            const location = Math.max(0, Math.min(1, locations[index]));
            // Convert 0...1 to 0...100
            const percentage = location * 100;
            return `${output} ${percentage}%`;
        }
        return output;
    });
}
//# sourceMappingURL=linear-gradient.js.map