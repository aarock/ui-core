import { GetProps } from "@tamagui/core";
import { BlurView } from "expo-blur";
export type BlurProps = GetProps<typeof Blur>;
export declare const Blur: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, BlurView, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    tint?: import("expo-blur").BlurTint;
    intensity?: number;
    blurReductionFactor?: number;
    experimentalBlurMethod?: import("expo-blur").ExperimentalBlurMethod;
} & import("react-native").ViewProps, import("@tamagui/core").StackStyleBase, {
    variant?: "none" | "subtle" | "strong" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
