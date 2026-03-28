import { GetProps } from "@tamagui/core";
import { BlurView } from "expo-blur";
export type BlurProps = GetProps<typeof Blur>;
export declare const Blur: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, BlurView, import("@tamagui/core").TamaguiComponentPropsBaseBase & {
    blurTarget?: import("react").RefObject<import("react-native").View | null>;
    tint?: import("expo-blur").BlurTint;
    intensity?: number;
    blurReductionFactor?: number;
    experimentalBlurMethod?: import("expo-blur").ExperimentalBlurMethod;
    blurMethod?: import("expo-blur").BlurMethod;
} & import("react-native").ViewProps, import("@tamagui/core").StackStyleBase, {
    variant?: "strong" | "none" | "subtle" | undefined;
}, import("@tamagui/core").StaticConfigPublic>;
//# sourceMappingURL=index.native.d.ts.map