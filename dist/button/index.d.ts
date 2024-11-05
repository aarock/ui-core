import { type GetProps, type SizeTokens } from "@tamagui/core";
export type ButtonFrameProps = GetProps<typeof ButtonFrame>;
export declare const ButtonFrame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SizeTokens | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isReadOnly?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type ButtonLabelProps = GetProps<typeof ButtonLabel>;
export declare const ButtonLabel: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: "$lg" | "$md" | "$sm" | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type ButtonIconProps = GetProps<typeof ButtonIcon>;
declare const ButtonIcon: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    name?: string;
    color?: string;
    fill?: string;
    stroke?: string;
} & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
    readonly color?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$lg" | "$md" | "$sm" | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "action" | "subtle" | "inverse" | "create" | "ghost" | undefined;
}, {
    readonly accept: {
        readonly color: "color";
    };
} & import("@tamagui/core").StaticConfigPublic>;
export type ButtonProps = GetProps<typeof ButtonFrame>;
export declare const Button: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStyleBase | "variant" | "isDisabled" | "isActive" | "isReadOnly"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: SizeTokens | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isReadOnly?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase> & {
    size?: SizeTokens | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isReadOnly?: boolean | undefined;
} & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStyleBase>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStyleBase, {
    size?: SizeTokens | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isReadOnly?: boolean | undefined;
}>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    size?: SizeTokens | undefined;
    variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    isDisabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isReadOnly?: boolean | undefined;
}, import("@tamagui/core").StaticConfigPublic> & Omit<import("@tamagui/core").StaticConfigPublic, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: SizeTokens | undefined;
        variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
        isDisabled?: boolean | undefined;
        isActive?: boolean | undefined;
        isReadOnly?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic];
} & {
    Frame: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
        size?: SizeTokens | undefined;
        variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
        isDisabled?: boolean | undefined;
        isActive?: boolean | undefined;
        isReadOnly?: boolean | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Label: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiTextElement, import("@tamagui/core").RNTamaguiTextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
        size?: "$lg" | "$md" | "$sm" | undefined;
        variant?: "danger" | "filter" | "default" | "option" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    }, import("@tamagui/core").StaticConfigPublic>;
    Icon: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
        name?: string;
        color?: string;
        fill?: string;
        stroke?: string;
    } & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
        readonly color?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
    }, {
        size?: "$lg" | "$md" | "$sm" | undefined;
        variant?: "danger" | "filter" | "default" | "option" | "action" | "subtle" | "inverse" | "create" | "ghost" | undefined;
    }, {
        readonly accept: {
            readonly color: "color";
        };
    } & import("@tamagui/core").StaticConfigPublic>;
    Spacer: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
};
export {};
