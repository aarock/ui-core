import type { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core';
import type { LinearGradientPoint } from './linear-gradient';
export type GradientExtraProps = {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
    locations?: number[] | null;
    start?: LinearGradientPoint | null;
    end?: LinearGradientPoint | null;
};
export declare const Gradient: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    shadow?: "$lg" | "$md" | "$sm" | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    inset?: number | import("@tamagui/core").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}>, keyof GradientExtraProps> & GradientExtraProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & GradientExtraProps, import("@tamagui/core").StackStyleBase, {
    shadow?: "$lg" | "$md" | "$sm" | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    inset?: number | import("@tamagui/core").SizeTokens | {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
    } | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type LinearGradientProps = GetProps<typeof Gradient>;
