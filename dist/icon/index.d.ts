import { type GetProps } from "@tamagui/core";
type _Props = {
    name?: string;
    color?: string;
    fill?: string;
    stroke?: string;
};
export type IconProps = GetProps<typeof Icon>;
export declare const Icon: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, import("@tamagui/core").TamaguiComponentPropsBaseBase & _Props & import("react").RefAttributes<any>, import("@tamagui/core").StackStyleBase & {
    readonly color?: Omit<import("@tamagui/core").ColorTokens | import("@tamagui/core").ThemeValueFallbackColor, "unset"> | undefined;
}, {
    size?: "$md" | "$lg" | "$sm" | undefined;
}, {
    readonly accept: {
        readonly color: "color";
    };
}>;
export {};
