import { type GetProps } from "@tamagui/core";
export type Insets = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};
export type SafeProps = GetProps<typeof Safe>;
export declare const Safe: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export declare function useSafeInsets(): Insets;
