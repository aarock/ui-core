import { type GetProps } from "@tamagui/core";
export type SpringProps = GetProps<typeof Spring>;
export declare const Spring: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, import("react").Component<import("react-native").ViewProps & {
    children?: import("react").ReactNode;
}, any, any>, import("@tamagui/core").TamaguiComponentPropsBaseBase & import("@react-spring/native").AnimatedProps<import("react-native").ViewProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("react").Component<import("react-native").ViewProps & {
    children?: import("react").ReactNode;
}, any, any>>> & {
    children?: import("react").ReactNode;
}, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export { useSpring, useSprings, useSpringValue, useChain, useInView, useTrail, useTransition, easings, config, type SpringConfig } from "@react-spring/native";
