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
import { Stack, withStaticProperties, styled } from "@tamagui/core";
import { StyledContext, Context } from "./context";
import { TextAreaField } from "./field";
import { Icon } from "../icon";
import { useState } from "react";
const TextAreaFrameBase = styled(Stack, {
    context: StyledContext,
    name: "TextArea",
    minWidth: 0,
    focusable: true,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    outlineWidth: 0,
    variants: {
        variant: {
            default: {
                borderWidth: 1,
                fontFamily: "$body",
                color: "$neutral11",
                borderColor: "$neutral7",
                backgroundColor: "$neutral2",
                shadowRadius: 1, shadowOpacity: 0.2,
                shadowOffset: { width: 0, height: 1 },
                hoverStyle: {
                    color: "$neutral12",
                    borderColor: "$neutral6",
                    backgroundColor: "$neutral1",
                    shadowRadius: 1, shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 2 },
                },
                pressStyle: {
                    color: "$neutral12",
                    borderColor: "$neutral8",
                    backgroundColor: "$neutral1",
                    shadowRadius: 0, shadowOpacity: 0,
                    shadowOffset: { width: 0, height: 0 },
                },
                focusStyle: {
                    color: "$neutral12",
                    borderColor: "$neutral8",
                    backgroundColor: "$neutral1",
                    shadowRadius: 0, shadowOpacity: 0,
                    shadowOffset: { width: 0, height: 0 },
                },
            },
            ghost: {
                color: "$neutral12",
                focusStyle: {
                    color: "$neutral12",
                    backgroundColor: "$neutral2",
                },
            },
        },
        size: {
            "...size": (size, { tokens }) => {
                return {
                    borderRadius: tokens.radius[size],
                    minHeight: tokens.size[size],
                    gap: tokens.space[size],
                    pl: tokens.space[size],
                };
            }
        }
    },
});
const TextAreaFrame = TextAreaFrameBase.styleable((_a, ref) => {
    var _b, _c, _d;
    var { value, onFocus, onBlur, onValueChange } = _a, props = __rest(_a, ["value", "onFocus", "onBlur", "onValueChange"]);
    const [isFocused, setIsFocused] = useState(false);
    const variant = (props === null || props === void 0 ? void 0 : props.variant) || "default";
    const variantProps = (_d = (_c = (_b = TextAreaFrameBase === null || TextAreaFrameBase === void 0 ? void 0 : TextAreaFrameBase.staticConfig) === null || _b === void 0 ? void 0 : _b.variants) === null || _c === void 0 ? void 0 : _c.variant) === null || _d === void 0 ? void 0 : _d[variant];
    const focusProps = isFocused ? variantProps === null || variantProps === void 0 ? void 0 : variantProps.focusStyle : {};
    const hoverProps = isFocused ? { hoverStyle: variantProps === null || variantProps === void 0 ? void 0 : variantProps.focusStyle } : {};
    return _jsx(Context.Provider, { value: { value, onValueChange }, children: _jsx(TextAreaFrameBase, Object.assign({ tabIndex: -1, ref: ref, onFocus: (...args) => {
                setIsFocused(true);
                onFocus === null || onFocus === void 0 ? void 0 : onFocus(...args);
            }, onBlur: (...args) => {
                setIsFocused(false);
                onBlur === null || onBlur === void 0 ? void 0 : onBlur(...args);
            } }, props, focusProps, hoverProps)) });
});
const TextAreaIcon = styled(Icon, {
    context: StyledContext,
    name: "ButtonIcon",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    flexShrink: 0,
    variants: {
        variant: {
            default: {
                color: "$neutral12",
            },
            mute: {
                color: "$neutral8",
            }
        },
        size: {
            "...size": (size, { tokens }) => ({
                py: tokens === null || tokens === void 0 ? void 0 : tokens.space[size],
            })
        }
    }
});
const TextAreaAdornments = styled(Stack, {
    context: StyledContext,
    name: "TextAreaAdornments",
    position: "relative",
    userSelect: "none",
    display: "flex",
    flexDirection: "row",
    flexShrink: 0,
    flexGrow: 0,
    gap: 0,
    variants: {
        size: {
            "...size": (size, { tokens }) => ({
                pr: tokens === null || tokens === void 0 ? void 0 : tokens.space[size],
            })
        }
    }
});
export const TextArea = withStaticProperties(TextAreaFrame, {
    Adornments: TextAreaAdornments,
    Frame: TextAreaFrame,
    Field: TextAreaField,
    Icon: TextAreaIcon,
});
//# sourceMappingURL=index.js.map