import { TextInput } from "react-native";
import { type GetProps } from '@tamagui/core';
export type InputFieldProps = GetProps<typeof InputFieldBase>;
declare const InputFieldBase: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").StackStyleBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$md" | "$lg" | "$sm" | undefined;
    variant?: "default" | "isDisabled" | undefined;
}, {
    readonly accept: {
        readonly placeholderColor: "color";
    };
}>;
export declare const InputField: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps, import("@tamagui/core").StackStyleBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$md" | "$lg" | "$sm" | undefined;
    variant?: "default" | "isDisabled" | undefined;
}>, TextInput, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("react-native").TextInputProps & void, import("@tamagui/core").StackStyleBase & {
    readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$md" | "$lg" | "$sm" | undefined;
    variant?: "default" | "isDisabled" | undefined;
}, {
    readonly accept: {
        readonly placeholderColor: "color";
    };
}>;
export {};
