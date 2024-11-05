var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
import { Stack } from "@tamagui/core";
import { useRef, useLayoutEffect, useEffect, isValidElement } from "react";
import { Spring, useSpringValue, useTransition, easings } from "../animation";
import { useMeasure } from "../use-measure";
export function Reveal(_a) {
    var { config = defaultConfig, children } = _a, rest = __rest(_a, ["config", "children"]);
    const isOpen = isValidElement(children);
    const childRef = useRef(children);
    const [ref, { height = 0 }] = useMeasure();
    const heightValue = useSpringValue(height);
    const transition = useTransition(isOpen, {
        from: { opacity: 0, height: 0 },
        enter: () => (next) => __awaiter(this, void 0, void 0, function* () {
            yield next({ height: heightValue });
            yield next({ opacity: 1 });
        }),
        leave: () => (next) => __awaiter(this, void 0, void 0, function* () {
            yield next({ opacity: 0 });
            yield next({ height: 0 });
        }),
        onDestroyed: (item) => {
            if (item)
                childRef.current = null;
        },
        config
    });
    useLayoutEffect(() => {
        heightValue.set(height);
    }, [heightValue, height]);
    useEffect(() => {
        if (isValidElement(children)) {
            childRef.current = children;
        }
    }, [children]);
    return transition((springs, item) => item && _jsx(Spring, { style: Object.assign(Object.assign({}, outerStyle), springs), children: _jsx(Stack, Object.assign({ ref: ref, style: innerStyle }, rest, { children: childRef.current || children })) }));
}
const outerStyle = { position: "relative", };
const innerStyle = { position: "absolute", left: 0, right: 0, top: 0, bottom: "auto", };
const defaultConfig = { duration: 300, easing: easings.easeOutSine };
//# sourceMappingURL=index.js.map