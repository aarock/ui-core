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
import { createContext, useContext, useState, useEffect, Fragment } from "react";
import { Keyboard } from "react-native";
import { useSafeInsets } from "../provider/safe-area-provider";
import { Box } from "../box";
import { Slot } from "@tamagui/core";
import { Portal } from "@tamagui/portal";
import { useFloating, flip, shift, offset, size, } from "@floating-ui/react-native";
const Context = createContext({});
function Root(_a) {
    var { role: r, strategy = "absolute", placement = "bottom-start", triggerOffset = 0, edgeOffset = 16, delay = 100, className, children, isClickable = false, isFocusable = false, isHoverable = false, isDismissable = true, isSameScroll = false, isInline = false, isFullscreen = false, shouldOffset = true, shouldFlip = true, shouldShift = true, shouldResize = true, shouldScroll = false, shouldMatchWidth = false } = _a, 
    // strategy = "absolute",
    // placement = "bottom-start",
    // triggerOffset = 4,
    // edgeOffset = 4,
    // className,
    // children,
    // isClickable = false,
    // isHoverable = false,
    // isDismissable = false,
    // shouldOffset = true,
    // shouldFlip = true,
    // shouldShift = true,
    // shouldResize = false,
    props = __rest(_a, ["role", "strategy", "placement", "triggerOffset", "edgeOffset", "delay", "className", "children", "isClickable", "isFocusable", "isHoverable", "isDismissable", "isSameScroll", "isInline", "isFullscreen", "shouldOffset", "shouldFlip", "shouldShift", "shouldResize", "shouldScroll", "shouldMatchWidth"]);
    // const id = useId()
    const [isOpen, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = useState();
    const [maxHeight, setMaxHeight] = useState();
    const { left, right, top, bottom } = useSafeInsets();
    const padding = {
        top: top + edgeOffset,
        left: left + edgeOffset,
        bottom: bottom + edgeOffset,
        right: right + edgeOffset
    };
    const { update, refs, floatingStyles } = useFloating({
        sameScrollView: isSameScroll,
        placement,
        middleware: [
            shouldOffset && offset(triggerOffset),
            shouldFlip && flip({ padding, crossAxis: true, mainAxis: true, rootBoundary: 'document' }),
            shouldShift && shift({ padding, crossAxis: true, mainAxis: true, rootBoundary: 'document' }),
            shouldResize && size({ padding, apply({ availableWidth: w, availableHeight: h }) { setMaxWidth(w); setMaxHeight(h); } }),
        ],
    });
    // const role = useRole( context, { role: r } )
    // const click = useClick( context, { enabled: isClickable } )
    // const hover = useHover( context, { enabled: isHoverable } )
    // const focus = useFocus( context, { enabled: isFocusable } )
    // const dismiss = useDismiss( context, { enabled: isDismissable } )
    return _jsx(Context.Provider, { value: Object.assign({ 
            // id,
            refs,
            delay,
            update,
            placement,
            floatingStyles,
            isOpen,
            setOpen,
            maxWidth,
            maxHeight,
            shouldResize,
            isDismissable,
            isFullscreen,
            isFocusable }, props), children: children });
}
const FloatingTrigger = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { refs, isOpen, setOpen, isFocusable } = useContext(Context);
    return _jsx(Slot, Object.assign({ display: "relative", ref: refs.setReference, zIndex: isOpen ? 1001 : undefined, onPress: () => setOpen(!isOpen) }, isFocusable && { onChange: () => setOpen(true) }, isFocusable && { onFocus: () => setOpen(true) }, isFocusable && { onBlur: () => setOpen(false) }, props, { children: children }));
};
const FloatingOverlay = (_a) => {
    var { asChild, as: Container = Fragment, children = null } = _a, props = __rest(_a, ["asChild", "as", "children"]);
    const { isOpen, setOpen, isDismissable } = useContext(Context);
    const Wrapper = asChild ? Slot : Box;
    return _jsx(Portal, { zIndex: 100, children: _jsx(Container, { children: isOpen && _jsx(Wrapper, Object.assign({ position: "absolute", overflow: "hidden", top: 0, right: 0, bottom: 0, left: 0, onPressIn: event => {
                    event.stopPropagation();
                    event.preventDefault();
                    if (isDismissable)
                        Keyboard.dismiss();
                    if (isDismissable)
                        setOpen(false);
                } }, props, { children: children })) }) });
};
const FloatingContent = (_a) => {
    var { children, asChild, as: Container = Fragment } = _a, props = __rest(_a, ["children", "asChild", "as"]);
    const { isOpen, isFullscreen, update, refs, floatingStyles, shouldResize, maxWidth, maxHeight, delay = 100 } = useContext(Context);
    // const { left: l, right: r, top: t, bottom: b, ...rest } = isFullscreen ? { left: 0, right: 0, top: 0, bottom: 0 } : floatingStyles
    const _b = isFullscreen ? { left: 0, right: 0, top: 0, bottom: 0 } : floatingStyles, { left: l, top: t, right: r, bottom: b } = _b, rest = __rest(_b, ["left", "top", "right", "bottom"]);
    const { left, right, top, bottom } = useSafeInsets();
    const [opacity, setOpacity] = useState(0);
    const display = isOpen ? "flex" : "none";
    const Wrapper = asChild ? Slot : Box;
    useEffect(() => {
        update === null || update === void 0 ? void 0 : update();
        setTimeout(() => update === null || update === void 0 ? void 0 : update(), delay);
        setTimeout(() => setOpacity(isOpen ? 1 : 0), delay);
    }, [isOpen]);
    return _jsx(Portal, { zIndex: 200, children: _jsx(Container, { children: isOpen && _jsx(Wrapper, Object.assign({ ref: refs.setFloating, opacity: opacity, display: display, style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Number.isNaN(t) || t === undefined ? {} : { top: (t) }), Number.isNaN(l) || l === undefined ? {} : { left: (l) }), Number.isNaN(r) || r === undefined ? {} : { right: (r) }), Number.isNaN(b) || b === undefined ? {} : { bottom: (b) }), shouldResize && maxWidth && !isFullscreen && { maxWidth: maxWidth - left - right }), shouldResize && maxHeight && !isFullscreen && { maxHeight: maxHeight - top - bottom }), rest) }, props, { children: children })) }) });
};
function useFloatingContext() {
    return useContext(Context);
}
const Floating = Root;
Floating.Root = Root;
Floating.Trigger = FloatingTrigger;
Floating.Content = FloatingContent;
Floating.Overlay = FloatingOverlay;
export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext };
//# sourceMappingURL=index.native.js.map