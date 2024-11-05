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
import { Children, cloneElement } from 'react';
import { YStack as Stack } from '../box';
export function Table(_a) {
    var { style, children } = _a, props = __rest(_a, ["style", "children"]);
    const tableStyle = Object.assign(style || {}, { borderSpacing: 0 });
    const rowTotal = Children.count(children);
    return _jsx(Stack
    // tag="table"
    // display="unset"
    // @ts-ignore
    , Object.assign({ 
        // tag="table"
        // display="unset"
        // @ts-ignore
        display: "table", style: tableStyle }, props, { children: Children.map(children, (child, rowIndex) => cloneElement(child, {
            total: rowTotal,
            index: rowIndex,
        })) }));
}
export function Row(_a) {
    var { onCellLayout, borderBottomColor, borderBottomWidth, sizes, children, total, index } = _a, props = __rest(_a, ["onCellLayout", "borderBottomColor", "borderBottomWidth", "sizes", "children", "total", "index"]);
    const cellTotal = Children.count(children);
    return _jsx(Stack
    // tag="tr" display="unset" 
    , Object.assign({ 
        // tag="tr" display="unset" 
        style: { display: "table-row" } }, props, { children: Children.map(children, (child, cellIndex) => cloneElement(child, {
            total: cellTotal,
            index: cellIndex,
            rowTotal: total,
            rowIndex: index,
            borderBottomColor,
            borderBottomWidth,
        })) }));
}
export const Cell = (_a) => {
    var { total = -1, index = -1, rowTotal = -1, rowIndex = -1, onLayout } = _a, props = __rest(_a, ["total", "index", "rowTotal", "rowIndex", "onLayout"]);
    return _jsx(Stack
    // tag="td"
    , Object.assign({ 
        // tag="td"
        style: { display: "table-cell", verticalAlign: "middle", textAlign: "center" } }, props, rowIndex === 0 && { borderTopWidth: 0 }, rowIndex === rowTotal - 1 && { borderBottomWidth: 0 }));
};
//# sourceMappingURL=index.js.map