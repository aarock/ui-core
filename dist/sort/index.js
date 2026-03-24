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
import { Slot } from "@tamagui/core";
import { useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import { useKeys } from "../use-keys";
import { Box } from '../box';
import { DndProvider } from '../dnd';
import { SortableContext, verticalListSortingStrategy, } from '@dnd-kit/sortable';
import { YStack } from '@tamagui/stacks';
export function Sort(_a) {
    var _b, _c;
    var { value = [], onValueChange, renderItem, renderEmpty, getKey = v => (v === null || v === void 0 ? void 0 : v.id) || (v === null || v === void 0 ? void 0 : v.key) || JSON.stringify(v) } = _a, rest = __rest(_a, ["value", "onValueChange", "renderItem", "renderEmpty", "getKey"]);
    const [keys, swap] = useKeys();
    return _jsx(YStack, Object.assign({}, rest, { children: _jsx(DndProvider, { onDragEnd: handleDragEnd, children: _jsxs(SortableContext, { items: keys, strategy: verticalListSortingStrategy, children: [(_b = (value || [])) === null || _b === void 0 ? void 0 : _b.map((item, index) => (_jsx(Sortable, { id: keys[index], render: options => renderItem === null || renderItem === void 0 ? void 0 : renderItem(item, options, index) }, keys[index]))), !((_c = (value || [])) === null || _c === void 0 ? void 0 : _c.length) && (renderEmpty === null || renderEmpty === void 0 ? void 0 : renderEmpty())] }) }) }));
    function handleDragEnd({ active, over }) {
        if ((active === null || active === void 0 ? void 0 : active.id) !== (over === null || over === void 0 ? void 0 : over.id)) {
            const fromIndex = keys.indexOf(active === null || active === void 0 ? void 0 : active.id);
            const toIndex = keys.indexOf(over === null || over === void 0 ? void 0 : over.id);
            if (fromIndex === -1)
                return;
            if (toIndex === -1)
                return;
            if (fromIndex === toIndex)
                return;
            const result = reorder((value || []), fromIndex, toIndex);
            swap(fromIndex, toIndex);
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(result);
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
function reorder(list, fromIndex, toIndex) {
    const result = [...list];
    const [removed] = result.splice(fromIndex, 1);
    result.splice(toIndex, 0, removed);
    return result;
}
//# sourceMappingURL=index.js.map