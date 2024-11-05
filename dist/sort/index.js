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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Slot } from "@tamagui/core";
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { Box } from '../box';
import { DndProvider } from '../dnd';
import { arrayMove, SortableContext, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { YStack } from '@tamagui/stacks';
export function Sort(_a) {
    var _b, _c, _d, _e;
    var { value = [], onValueChange, renderItem, renderEmpty, getKey = v => { var _a, _b; return (_b = (_a = v.id) !== null && _a !== void 0 ? _a : v.key) !== null && _b !== void 0 ? _b : JSON.stringify(v); } } = _a, rest = __rest(_a, ["value", "onValueChange", "renderItem", "renderEmpty", "getKey"]);
    return _jsx(YStack, Object.assign({}, rest, { children: _jsx(DndProvider, { onDragEnd: handleDragEnd, children: _jsxs(SortableContext, { items: (_c = (_b = (value || [])) === null || _b === void 0 ? void 0 : _b.map) === null || _c === void 0 ? void 0 : _c.call(_b, v => getKey(v)), strategy: verticalListSortingStrategy, children: [(_d = (value || [])) === null || _d === void 0 ? void 0 : _d.map((item, index) => (_jsx(Sortable, { id: getKey(item), render: options => renderItem === null || renderItem === void 0 ? void 0 : renderItem(item, options, index) }, getKey(item)))), !((_e = (value || [])) === null || _e === void 0 ? void 0 : _e.length) && (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty())] }) }) }));
    function handleDragEnd({ active, over }) {
        if (active.id !== over.id) {
            const fromIndex = (value || []).findIndex(item => active.id === getKey(item));
            const toIndex = (value || []).findIndex(item => over.id === getKey(item));
            const newArray = arrayMove((value || []), fromIndex, toIndex);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(newArray);
        }
    }
}
function Sortable(_a) {
    var { id, render } = _a, rest = __rest(_a, ["id", "render"]);
    const { attributes, isDragging, listeners, setNodeRef, setActivatorNodeRef, transform, transition } = useSortable({ id });
    const [hasHandle, setHasHandle] = useState(false);
    if (transform)
        transform.scaleX = 1;
    if (transform)
        transform.scaleY = 1;
    const parentProps = Object.assign(Object.assign(Object.assign({ style: {
            zIndex: isDragging ? 100 : undefined,
            transition,
        }, transform: CSS.Transform.toString(transform) }, hasHandle ? {} : listeners), attributes), { ref: setNodeRef });
    const handleProps = Object.assign(Object.assign({}, listeners), { cursor: isDragging ? "grabbing" : "grab", ref: (ref) => {
            setHasHandle(true);
            setActivatorNodeRef(ref);
        } });
    return (_jsx(Box, Object.assign({}, parentProps, { children: _jsx(Slot, Object.assign({ children: (render === null || render === void 0 ? void 0 : render({ isDragging, props: handleProps })) || _jsx(_Fragment, {}) }, rest)) })));
}
//# sourceMappingURL=index.js.map