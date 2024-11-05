import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { TextInput } from "react-native";
import { styled, useTheme } from '@tamagui/core';
import { Context, StyledContext } from "./context";
const InputFieldBase = styled(TextInput, {
    context: StyledContext,
    flex: 1,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    // fontSize: 14,
    variants: {
        variant: {
            default: {
                //@ts-ignore
                color: '$neutral12',
                //@ts-ignore
                hoverStyle: { color: '$neutral12' },
                //@ts-ignore
                focusStyle: { color: '$neutral12' },
            },
            isDisabled: {
                //@ts-ignore
                color: '$neutral8',
                //@ts-ignore
                hoverStyle: { color: '$neutral8' },
                //@ts-ignore
                focusStyle: { color: '$neutral8' },
            },
        },
        size: {
            "$sm": {
                //@ts-ignore
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$md": {
                //@ts-ignore
                fontSize: 18,
                minHeight: 18 + 2 * 8,
            },
            "$lg": {
                //@ts-ignore
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            },
        }
        // size: {
        //     "...size": ( size, { tokens } ) => ( {
        //         minHeight: ( tokens?.size[ size ].val || 0 ) + ( tokens?.space[ size ].val || 0 ),
        //     } )
        // }
    }
}, { accept: { placeholderColor: 'color' } });
export const InputField = InputFieldBase.styleable((props, ref) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { value, onValueChange, onChange } = useContext(Context);
    const theme = useTheme();
    const placeholderColorProp = (_b = (_a = props.placeholderTextColor) !== null && _a !== void 0 ? _a : props.placeholderColor) !== null && _b !== void 0 ? _b : "$neutral7";
    const placeholderTextColor = (_g = (_e = (_d = (_c = theme[placeholderColorProp]) === null || _c === void 0 ? void 0 : _c.get()) !== null && _d !== void 0 ? _d : placeholderColorProp) !== null && _e !== void 0 ? _e : (_f = theme.placeholderColor) === null || _f === void 0 ? void 0 : _f.get()) !== null && _g !== void 0 ? _g : "black";
    return _jsx(InputFieldBase, Object.assign({ ref: ref, editable: !props.disabled, placeholderTextColor: placeholderTextColor }, props, { value: value, onChangeText: text => {
            onValueChange === null || onValueChange === void 0 ? void 0 : onValueChange(text);
        }, onChange: event => {
            onChange === null || onChange === void 0 ? void 0 : onChange(event);
            // onValueChange?.( event?.nativeEvent?.text )
        } }));
});
//# sourceMappingURL=field.native.js.map