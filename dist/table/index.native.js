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
import React from 'react';
import { View, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    row: { flexDirection: 'row' },
});
export const Cell = (_a) => {
    var { onLayout, index, width, style } = _a, props = __rest(_a, ["onLayout", "index", "width", "style"]);
    return (_jsx(View, Object.assign({ onLayout: (event) => onLayout(index, event), style: [{ width }, style] }, props, { children: typeof props.render === 'function' && props.render() || null })));
};
export const Row = (_a) => {
    var { onCellLayout, sizes, style, children } = _a, props = __rest(_a, ["onCellLayout", "sizes", "style", "children"]);
    if (typeof onCellLayout !== 'function' || !sizes) {
        throw new Error('<Row /> component must be a direct child of <Table /> component.');
    }
    return (_jsx(View, Object.assign({ style: [styles.row, style] }, props, { children: React.Children.map(children, (cell, index) => React.cloneElement(cell, {
            onLayout: onCellLayout,
            width: sizes[index],
            index,
        })) })));
};
export class Table extends React.Component {
    constructor() {
        super(...arguments);
        this.layoutCountLimit = undefined;
        this.cellsLayoutCount = 0;
        this.state = {
            renderSizes: {},
        };
        this.sizes = {};
        this._onCellLayout = (index, event) => {
            this.cellsLayoutCount += 1;
            const layoutWidth = event.nativeEvent.layout.width;
            if (!this.sizes[index] || this.sizes[index] < layoutWidth) {
                this.sizes[index] = Math.ceil(layoutWidth);
            }
            if (this.layoutCountLimit
                && this.cellsLayoutCount >= this.layoutCountLimit
                && !this._inSync()) {
                this.setState({ renderSizes: this.sizes });
            }
        };
        this._inSync = () => {
            const stateSizes = Object.getOwnPropertyNames(this.state.renderSizes)
                .map((key) => `${key}:${this.state.renderSizes[key]}`)
                .join(',');
            const classSizes = Object.getOwnPropertyNames(this.sizes)
                .map((key) => `${key}:${this.sizes[key]}`)
                .join(',');
            return stateSizes === classSizes;
        };
        this._setLayoutCountLimit = () => {
            //@ts-ignore
            const rows = React.Children.toArray(this.props.children).filter(Boolean);
            //@ts-ignore
            const colsPerRow = rows.map((row) => React.Children.count(row.props.children));
            const minCols = Math.min(...colsPerRow) || 9;
            const maxCols = Math.max(...colsPerRow);
            // if ( !this.columnsCountWarned && minCols !== maxCols ) {
            //     this.columnsCountWarned = true
            //     console.warn( '[native-table] All rows do not have the same columns count. Render cycles optimisations are disabled.' )
            // }
            const numRows = rows.length;
            // this.layoutCountLimit = minCols * numRows
        };
        this.reset = () => {
            this.layoutCountLimit = undefined;
            this.cellsLayoutCount = 0;
            this.sizes = {};
            this.setState({ renderSizes: {} });
        };
    }
    componentDidMount() {
        this._setLayoutCountLimit();
    }
    componentDidUpdate() {
        this._setLayoutCountLimit();
    }
    render() {
        return (_jsx(View, Object.assign({}, this.props, { children: React.Children.map(this.props.children, (row) => {
                if (!React.isValidElement(row))
                    return null;
                return React.cloneElement(row, {
                    // @ts-ignore
                    onCellLayout: this._onCellLayout,
                    sizes: this.state.renderSizes,
                });
            }) })));
    }
}
//# sourceMappingURL=index.native.js.map