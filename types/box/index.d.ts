import { type GetProps, type GetThemeValueForKey } from "@tamagui/core";
export type UIColor = GetThemeValueForKey<"color">;
export type BoxProps = Omit<GetProps<typeof Box>, 'render'>;
export declare const Box: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    transparent?: boolean | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    "...size"?: number | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type XStackProps = Omit<GetProps<typeof XStack>, 'render'>;
export declare const XStack: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    shadow?: "$md" | "$lg" | "$sm" | undefined;
    transparent?: boolean | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type YStackProps = Omit<GetProps<typeof YStack>, 'render'>;
export declare const YStack: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    shadow?: "$md" | "$lg" | "$sm" | undefined;
    transparent?: boolean | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type ZStackProps = Omit<GetProps<typeof ZStack>, 'render'>;
export declare const ZStack: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    shadow?: "$md" | "$lg" | "$sm" | undefined;
    transparent?: boolean | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}, import("@tamagui/core").StaticConfigPublic & {
    neverFlatten: true;
    isZStack: true;
}>;
//# sourceMappingURL=index.d.ts.map