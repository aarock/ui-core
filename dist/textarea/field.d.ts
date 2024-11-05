import { ChangeEvent } from 'react';
import { type GetProps } from '@tamagui/core';
export type TextAreaFieldProps = GetProps<typeof TextAreaFieldBase>;
declare const TextAreaFieldBase: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$lg" | "$md" | "$sm" | undefined;
    variant?: "default" | "mute" | undefined;
}, {
    readonly accept: {
        readonly placeholderColor: "color";
    };
    readonly defaultProps: {
        readonly placeholder: string;
        readonly resize: string;
    };
}>;
export declare const TextAreaField: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$lg" | "$md" | "$sm" | undefined;
    variant?: "default" | "mute" | undefined;
}>, "value" | "onChange"> & {
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & {
    value?: string;
    onChange?: (value: ChangeEvent<HTMLTextAreaElement>) => void;
}, import("@tamagui/core").TextStylePropsBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$lg" | "$md" | "$sm" | undefined;
    variant?: "default" | "mute" | undefined;
}, {
    readonly accept: {
        readonly placeholderColor: "color";
    };
    readonly defaultProps: {
        readonly placeholder: string;
        readonly resize: string;
    };
}>;
export {};
