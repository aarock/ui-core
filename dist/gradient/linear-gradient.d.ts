import type { LinearGradientPoint } from 'expo-linear-gradient';
export type { LinearGradientProps, LinearGradientPoint } from 'expo-linear-gradient';
import { YStackProps } from '../box';
export type GradientProps = YStackProps & {
    colors: readonly string[];
    locations?: readonly number[] | null;
    start?: LinearGradientPoint | null;
    end?: LinearGradientPoint | null;
    dither?: boolean;
};
export declare function LinearGradient({ colors, locations, start, end, ...props }: GradientProps): import("react/jsx-runtime").JSX.Element;
