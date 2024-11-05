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
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, createContext, useContext, useImperativeHandle, useState } from "react";
import { Box } from "../box";
import { Slot } from "@radix-ui/react-slot";
import { useFloating, useInteractions, useClick, useHover, useFocus, flip, shift, offset, size, inline, autoUpdate, useRole, useDismiss, } from "@floating-ui/react";
import { Portal } from "@tamagui/portal";
const Context = createContext({});
function Root(_a) {
    var { actions, role: r, strategy = "absolute", placement = "bottom-start", triggerOffset = 0, edgeOffset = 16, delay = 100, className, children, isOpen: isControlledOpen, isClickable = false, isFocusable = false, isHoverable = false, isDismissable = true, isSameScroll = false, isInline = false, isFullscreen = false, shouldOffset = true, shouldFlip = true, shouldShift = true, shouldResize = true, shouldScroll = false, shouldMatchWidth = false } = _a, props = __rest(_a, ["actions", "role", "strategy", "placement", "triggerOffset", "edgeOffset", "delay", "className", "children", "isOpen", "isClickable", "isFocusable", "isHoverable", "isDismissable", "isSameScroll", "isInline", "isFullscreen", "shouldOffset", "shouldFlip", "shouldShift", "shouldResize", "shouldScroll", "shouldMatchWidth"]);
    const [isOpen, setOpen] = useState(false);
    const { context, refs, floatingStyles } = useFloating({
        open: isOpen,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            isInline && inline(),
            shouldOffset && offset(triggerOffset),
            shouldFlip && flip({ padding: edgeOffset }),
            shouldShift && shift({ padding: edgeOffset }),
            shouldResize && size({
                padding: edgeOffset,
                apply(_a) {
                    var { availableWidth, availableHeight, elements, rects } = _a, rest = __rest(_a, ["availableWidth", "availableHeight", "elements", "rects"]);
                    // console.log( rest, rects.reference.width )
                    Object.assign(elements.floating.style, Object.assign(Object.assign(Object.assign({}, shouldMatchWidth && { minWidth: `${rects.reference.width}px` }), shouldScroll && { overflow: "auto" }), { maxWidth: `${availableWidth}px`, maxHeight: `${availableHeight}px` }));
                }
            }),
        ],
        strategy,
        placement,
    });
    const role = useRole(context, { role: r });
    const click = useClick(context, { enabled: isClickable });
    const hover = useHover(context, { enabled: isHoverable, delay });
    const focus = useFocus(context, { enabled: isFocusable });
    const dismiss = useDismiss(context, { enabled: isDismissable });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        role,
        click,
        hover,
        focus,
        dismiss
    ]);
    useImperativeHandle(actions, () => ({
        setOpen,
        toggleOpen: () => setOpen(isOpen => !isOpen),
    }));
    return _jsx(Context.Provider, { value: Object.assign({ refs,
            floatingStyles, isOpen: isControlledOpen !== null && isControlledOpen !== void 0 ? isControlledOpen : isOpen, isFullscreen,
            setOpen,
            getReferenceProps,
            getFloatingProps }, props), children: children });
}
function FloatingTrigger(_a) {
    var { children, asChild } = _a, rest = __rest(_a, ["children", "asChild"]);
    const { refs, isOpen, setOpen, getReferenceProps } = useFloatingContext();
    const Wrapper = asChild ? Slot : Box;
    return _jsx(Wrapper, Object.assign({ zIndex: isOpen ? 101 : undefined, ref: refs.setReference }, getReferenceProps(), rest, { children: children || _jsx(_Fragment, {}) }));
}
const FloatingOverlay = (_a) => {
    var { asChild, as: Container = Fragment, children = null } = _a, props = __rest(_a, ["asChild", "as", "children"]);
    const { isOpen, setOpen, isDismissable } = useContext(Context);
    const Wrapper = asChild ? Slot : Box;
    return _jsx(Portal, { zIndex: 100, children: _jsx(Container, { children: isOpen && _jsx(Wrapper, Object.assign({ zIndex: 100, pointerEvents: "auto", position: "fixed", overflow: "hidden", top: 0, right: 0, bottom: 0, left: 0, onPressIn: event => {
                    event.stopPropagation();
                    event.preventDefault();
                    if (isDismissable)
                        setOpen(false);
                } }, props, { children: children || _jsx(_Fragment, {}) })) }) });
};
function FloatingContent({ children, as: Container = Fragment, asChild }) {
    const { refs, isOpen, floatingStyles, getFloatingProps } = useFloatingContext();
    const Wrapper = asChild ? Slot : Box;
    return _jsx(Portal, { zIndex: 200, children: _jsx(Container, { children: isOpen && _jsx(Wrapper, Object.assign({ zIndex: 200, pointerEvents: "auto", ref: refs.setFloating, style: floatingStyles }, getFloatingProps(), { children: children || _jsx(_Fragment, {}) })) }) });
}
function useFloatingContext() {
    return useContext(Context);
}
const Floating = Root;
Floating.Root = Root;
Floating.Trigger = FloatingTrigger;
Floating.Content = FloatingContent;
Floating.Overlay = FloatingOverlay;
export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext };
//# sourceMappingURL=index.js.map