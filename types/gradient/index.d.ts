import type { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core';
import type { LinearGradientPoint } from './linear-gradient';
export type GradientExtraProps = {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
    locations?: number[] | null;
    start?: LinearGradientPoint | null;
    end?: LinearGradientPoint | null;
};
export declare const Gradient: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStyleBase, {
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly" | undefined;
    shadow?: "$md" | "$lg" | "$sm" | undefined;
    align?: "center" | "stretch" | "baseline" | "end" | "start" | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}>, keyof GradientExtraProps> & GradientExtraProps, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & GradientExtraProps, import("@tamagui/core").StackStyleBase, {
    justify?: "center" | "end" | "start" | "between" | "around" | "evenly" | undefined;
    shadow?: "$md" | "$lg" | "$sm" | undefined;
    align?: "center" | "stretch" | "baseline" | "end" | "start" | undefined;
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    variant?: "card" | "well" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
export type LinearGradientProps = GetProps<typeof Gradient>;
//# sourceMappingURL=index.d.ts.map