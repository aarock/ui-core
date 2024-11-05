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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useFloating, useDismiss, useRole, useClick, useInteractions, useId, FloatingFocusManager, FloatingOverlay, FloatingPortal } from "@floating-ui/react";
import { Box, XStack, YStack } from "../box";
import { Blur } from "../blur";
import { Icon } from "../icon";
import { Text } from "../text";
import { AnimatePresence } from "@tamagui/animate-presence";
import { withStaticProperties } from "@tamagui/core";
function DialogFrame({ isOpen: controlledIsOpen, onOpenChange, render, children }) {
    const [_isOpen, _setOpen] = useState(controlledIsOpen);
    const isOpen = controlledIsOpen !== null && controlledIsOpen !== void 0 ? controlledIsOpen : _isOpen;
    const setOpen = onOpenChange !== null && onOpenChange !== void 0 ? onOpenChange : _setOpen;
    const { refs, context } = useFloating({
        open: isOpen,
        onOpenChange: setOpen
    });
    const click = useClick(context);
    const role = useRole(context);
    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        click,
        role,
        dismiss
    ]);
    const headingId = useId();
    const descriptionId = useId();
    return _jsxs(FloatingPortal, { children: [_jsx(AnimatePresence, { children: isOpen &&
                    _jsx(Blur, { fullscreen: true, animation: "slow", variant: "subtle", enterStyle: { opacity: 0 }, exitStyle: { opacity: 0 }, onPress: () => setOpen(false) }) }), _jsx(AnimatePresence, { children: isOpen &&
                    _jsx(FloatingOverlay, { className: "Dialog-overlay", lockScroll: true, children: _jsx(FloatingFocusManager, { context: context, children: _jsxs(Box, Object.assign({ fullscreen: true, animation: "medium", enterStyle: { opacity: 0, y: -4, scale: 1.02 }, exitStyle: { opacity: 0, y: -4, scale: 1.02 }, alignItems: "center", justifyContent: "center", ref: refs.setFloating, "aria-labelledby": headingId, "aria-describedby": descriptionId }, getFloatingProps(), { children: [render === null || render === void 0 ? void 0 : render(getReferenceProps, setOpen), children] })) }) }) })] });
}
function DialogContent(props) {
    return _jsx(YStack, Object.assign({ variant: "card", p: "$lg", gap: "$lg", shadow: "$lg", minWidth: 200, maxWidth: 400 }, props));
}
function DialogHeader(_a) {
    var { icon, color, label } = _a, props = __rest(_a, ["icon", "color", "label"]);
    return _jsxs(XStack, Object.assign({ p: "$lg", gap: "$lg", alignItems: "center" }, props, { children: [icon && _jsx(Icon, { name: icon, size: "$lg", color: color }), _jsx(Text, { fontSize: 20, fontWeight: 500, children: label })] }));
}
function DialogBody(_a) {
    var props = __rest(_a, []);
    return _jsx(YStack, Object.assign({ px: "$lg", gap: "$lg" }, props));
}
function DialogFooter(_a) {
    var props = __rest(_a, []);
    return _jsx(XStack, Object.assign({ p: "$lg", gap: "$lg", flexDirection: "row-reverse" }, props));
}
export const Dialog = withStaticProperties(DialogFrame, {
    Frame: DialogFrame,
    Content: DialogContent,
    Header: DialogHeader,
    Body: DialogBody,
    Footer: DialogFooter,
});
//# sourceMappingURL=index.js.map