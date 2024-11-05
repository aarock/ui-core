import { FC, PropsWithChildren, MutableRefObject } from "react";
import { type BoxProps } from "../box";
export type FloatingProps = Omit<BoxProps, "asChild"> & {
    actions?: MutableRefObject<FloatingActions | undefined>;
    strategy?: "absolute" | "fixed";
    placement?: "top" | "bottom" | "left" | "right" | "top-start" | "bottom-start" | "left-start" | "right-start" | "top-end" | "bottom-end" | "left-end" | "right-end";
    role?: "tooltip" | "dialog" | "alertdialog" | "menu" | "listbox" | "grid" | "tree" | undefined;
    delay?: number | Partial<{
        open: number;
        close: number;
    }> | undefined;
    triggerOffset?: number;
    edgeOffset?: number;
    isOpen?: boolean;
    isClickable?: boolean;
    isFocusable?: boolean;
    isHoverable?: boolean;
    isDismissable?: boolean;
    isSameScroll?: boolean;
    isInline?: boolean;
    isFullscreen?: boolean;
    shouldOffset?: boolean;
    shouldFlip?: boolean;
    shouldShift?: boolean;
    shouldResize?: boolean;
    shouldScroll?: boolean;
    shouldMatchWidth?: boolean;
};
export type FloatingActions = {
    setOpen: (isOpen: boolean) => void;
    toggleOpen: () => void;
};
declare function Root({ actions, role: r, strategy, placement, triggerOffset, edgeOffset, delay, className, children, isOpen: isControlledOpen, isClickable, isFocusable, isHoverable, isDismissable, isSameScroll, isInline, isFullscreen, shouldOffset, shouldFlip, shouldShift, shouldResize, shouldScroll, shouldMatchWidth, ...props }: FloatingProps): import("react/jsx-runtime").JSX.Element;
export type FloatingTriggerProps = BoxProps;
declare function FloatingTrigger({ children, asChild, ...rest }: FloatingTriggerProps): import("react/jsx-runtime").JSX.Element;
export type FloatingOverlayProps = BoxProps & {
    as?: FC<PropsWithChildren>;
};
declare const FloatingOverlay: ({ asChild, as: Container, children, ...props }: FloatingOverlayProps) => import("react/jsx-runtime").JSX.Element;
export type FloatingContentProps = BoxProps & {
    as?: FC<PropsWithChildren>;
};
declare function FloatingContent({ children, as: Container, asChild }: FloatingContentProps): import("react/jsx-runtime").JSX.Element;
declare function useFloatingContext(): any;
declare const Floating: typeof Root & {
    Root: typeof Root;
    Trigger: typeof FloatingTrigger;
    Content: typeof FloatingContent;
    Overlay: typeof FloatingOverlay;
};
export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext };
