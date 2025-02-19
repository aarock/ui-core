import { type YStackProps as StackProps } from '../box';
export type TableProps = StackProps;
export declare function Table({ style, children, ...props }: TableProps): import("react/jsx-runtime").JSX.Element;
export type RowProps = StackProps & {
    total?: number;
    index?: number;
    sizes?: number[];
    width?: number | string;
    onCellLayout?: (index: number, event: any) => void;
};
export declare function Row({ onCellLayout, borderBottomColor, borderBottomWidth, sizes, children, total, index, ...props }: RowProps): import("react/jsx-runtime").JSX.Element;
export type CellProps = StackProps & {
    total?: number;
    index?: number;
    rowTotal?: number;
    rowIndex?: number;
    onLayout?: (index: number, event: any) => void;
};
export declare const Cell: ({ total, index, rowTotal, rowIndex, onLayout, ...props }: CellProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map