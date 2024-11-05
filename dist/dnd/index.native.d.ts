import { ReactNode } from "react";
import { type DndProviderProps } from "./index.js";
type DraggableProps<T> = {
    id: string;
    data: T;
    isDisabled?: boolean;
    children?: ReactNode;
};
export declare function Draggable<T>({ id, data, isDisabled: disabled, ...rest }: DraggableProps<T>): void;
type DroppableProps<T> = {
    id: string;
    data: T;
    isDisabled?: boolean;
    children?: ReactNode;
};
export declare function Droppable<T>({ id, data, isDisabled: disabled, ...rest }: DroppableProps<T>): void;
export declare function DndProvider<A, O>({ onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel, }: DndProviderProps<A, O>): import("react/jsx-runtime").JSX.Element;
export {};
