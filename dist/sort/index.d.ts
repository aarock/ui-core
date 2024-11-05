import { ReactNode } from 'react';
import { BoxProps, type YStackProps } from '../box';
export type SortRenderOptions = {
    isDragging: boolean;
    props?: BoxProps;
};
export type SortProps<T> = YStackProps & {
    value?: T[];
    onValueChange?: (value: T[]) => void;
    renderItem?: (item: T, options: SortRenderOptions, index: number) => ReactNode;
    renderEmpty?: () => ReactNode;
    getKey?: (item: T) => string;
};
export declare function Sort<T>({ value, onValueChange, renderItem, renderEmpty, getKey, ...rest }: SortProps<T>): import("react/jsx-runtime").JSX.Element;
