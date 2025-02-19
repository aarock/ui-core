import React from 'react';
export declare const Cell: ({ onLayout, index, width, style, ...props }: {
    [x: string]: any;
    onLayout: any;
    index: any;
    width: any;
    style: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Row: ({ onCellLayout, sizes, style, children, ...props }: {
    [x: string]: any;
    onCellLayout: any;
    sizes: any;
    style: any;
    children: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare class Table extends React.Component {
    layoutCountLimit: undefined;
    cellsLayoutCount: number;
    state: {
        renderSizes: {};
    };
    sizes: {};
    componentDidMount(): void;
    componentDidUpdate(): void;
    _onCellLayout: (index: any, event: any) => void;
    _inSync: () => boolean;
    _setLayoutCountLimit: () => void;
    reset: () => void;
    render(): import("react/jsx-runtime").JSX.Element;
}
//# sourceMappingURL=index.native.d.ts.map