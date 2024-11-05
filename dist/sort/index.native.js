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
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { XStack, YStack } from '../box';
export function Sort(_a) {
    var { value = [], onValueChange, renderItem, getKey = v => JSON.stringify(v), gap = 0 } = _a, rest = __rest(_a, ["value", "onValueChange", "renderItem", "getKey", "gap"]);
    return _jsx(XStack, Object.assign({}, rest, { children: _jsx(GestureHandlerRootView, { children: _jsx(DraggableFlatList, { style: { overflow: "visible" }, data: value, scrollEnabled: false, keyExtractor: getKey, onDragEnd: ({ data }) => onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(data), renderItem: ({ item, drag, isActive, getIndex }) => {
                    return _jsx(ScaleDecorator, { activeScale: 1.01, children: _jsx(YStack, { pb: gap, children: renderItem === null || renderItem === void 0 ? void 0 : renderItem(item, { isDragging: isActive, props: { onPressIn: drag } }, (getIndex === null || getIndex === void 0 ? void 0 : getIndex()) || 0) }) });
                } }) }) }));
}
//# sourceMappingURL=index.native.js.map