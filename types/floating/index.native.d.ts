import { FC, PropsWithChildren } from "react";
import { type BoxProps } from "../box";
import { type FloatingProps } from "./index.js";
declare function Root({ role: r, strategy, placement, triggerOffset, edgeOffset, delay, className, children, isClickable, isFocusable, isHoverable, isDismissable, isSameScroll, isInline, isFullscreen, shouldOffset, shouldFlip, shouldShift, shouldResize, shouldScroll, shouldMatchWidth, ...props }: FloatingProps): import("react/jsx-runtime").JSX.Element;
export type FloatingTriggerProps = Omit<BoxProps, "asChild">;
declare const FloatingTrigger: ({ children, ...props }: FloatingTriggerProps) => import("react/jsx-runtime").JSX.Element;
export type FloatingOverlayProps = BoxProps & {
    as?: FC<PropsWithChildren>;
};
declare const FloatingOverlay: ({ asChild, as: Container, children, ...props }: FloatingOverlayProps) => import("react/jsx-runtime").JSX.Element;
export type FloatingContentProps = BoxProps & {
    as?: FC<PropsWithChildren>;
};
declare const FloatingContent: ({ children, asChild, as: Container, ...props }: FloatingContentProps) => import("react/jsx-runtime").JSX.Element;
declare function useFloatingContext(): any;
declare const Floating: typeof Root & {
    Root: typeof Root;
    Trigger: typeof FloatingTrigger;
    Content: typeof FloatingContent;
    Overlay: typeof FloatingOverlay;
};
export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext };
//# sourceMappingURL=index.native.d.ts.map