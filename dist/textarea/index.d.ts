import { type GetProps } from "@tamagui/core";
import { type ContextProps } from "./context";
export type TextAreaFrameProps = GetProps<typeof TextAreaFrame>;
declare const TextAreaFrame: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "ghost" | undefined;
}>, keyof ContextProps> & ContextProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & ContextProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "ghost" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type TextAreaIconProps = GetProps<typeof TextAreaIcon>;
declare const TextAreaIcon: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    name?: string;
    color?: string;
    fill?: string;
    stroke?: string;
} & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
    readonly color?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "mute" | undefined;
}, {
    readonly accept: {
        readonly color: "color";
    };
} & import("@tamagui/core").StaticConfigPublic>;
export type TextAreaAdornmentsProps = GetProps<typeof TextAreaAdornments>;
declare const TextAreaAdornments: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type { TextAreaFieldProps } from "./field";
export type TextAreaProps = GetProps<typeof TextAreaFrame>;
export declare const TextArea: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "ghost" | undefined;
}>, keyof ContextProps> & ContextProps & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "ghost" | undefined;
}>, keyof ContextProps> & ContextProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & ContextProps, import("@tamagui/core").StackStyleBase, {
    size?: import("@tamagui/core").SizeTokens | undefined;
    variant?: "default" | "ghost" | undefined;
}, import("@tamagui/core").StaticConfigPublic> & Omit<import("@tamagui/core").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: import("@tamagui/core").SizeTokens | undefined;
        variant?: "default" | "ghost" | undefined;
    }>, keyof ContextProps> & ContextProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & ContextProps, import("@tamagui/core").StackStyleBase, {
        size?: import("@tamagui/core").SizeTokens | undefined;
        variant?: "default" | "ghost" | undefined;
    }, import("@tamagui/core").StaticConfigPublic];
} & {
    Adornments: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: import("@tamagui/core").SizeTokens | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Frame: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: import("@tamagui/core").SizeTokens | undefined;
        variant?: "default" | "ghost" | undefined;
    }>, keyof ContextProps> & ContextProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & ContextProps, import("@tamagui/core").StackStyleBase, {
        size?: import("@tamagui/core").SizeTokens | undefined;
        variant?: "default" | "ghost" | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Field: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
        readonly placeholderColor?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: "$lg" | "$md" | "$sm" | undefined;
        variant?: "default" | "mute" | undefined;
    }>, "onChange" | "value"> & {
        value?: string;
        onChange?: (value: import("react").ChangeEvent<HTMLTextAreaElement>) => void;
    }, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps & {
        value?: string;
        onChange?: (value: import("react").ChangeEvent<HTMLTextAreaElement>) => void;
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
    Icon: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
        name?: string;
        color?: string;
        fill?: string;
        stroke?: string;
    } & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
        readonly color?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: import("@tamagui/core").SizeTokens | undefined;
        variant?: "default" | "mute" | undefined;
    }, {
        readonly accept: {
            readonly color: "color";
        };
    } & import("@tamagui/core").StaticConfigPublic>;
};
