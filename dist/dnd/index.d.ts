import { ReactNode } from "react";
type DraggableProps<T> = {
    id: string;
    data: T;
    isDisabled?: boolean;
    children?: ReactNode;
};
export declare function Draggable<T>({ id, data, isDisabled: disabled, ...rest }: DraggableProps<T>): import("react/jsx-runtime").JSX.Element;
type DroppableProps<T> = {
    id: string;
    data: T;
    isDisabled?: boolean;
    children?: ReactNode;
};
export declare function Droppable<T>({ id, data, isDisabled: disabled, ...rest }: DroppableProps<T>): import("react/jsx-runtime").JSX.Element;
export type DndProviderProps<A, O> = {
    onDragStart?: () => void;
    onDragMove?: () => void;
    onDragOver?: (context: {
        active: A;
        over: O;
    }) => void;
    onDragEnd?: (context: {
        active: A;
        over: O;
    }) => void;
    onDragCancel?: () => void;
    children?: ReactNode;
};
export declare function DndProvider<A, O>({ onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel, ...props }: DndProviderProps<A, O>): import("react/jsx-runtime").JSX.Element;
export {};
