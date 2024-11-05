import { GetProps } from "@tamagui/core";
export type ColorPickerProps = GetProps<typeof ColorPicker>;
export declare const ColorPicker: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, unknown, import("@tamagui/core").TamaguiComponentPropsBaseBase & Partial<import("react-colorful/dist/types").ColorPickerBaseProps<string>>, import("@tamagui/core").StackStyleBase, {}, import("@tamagui/core").StaticConfigPublic>;
export type ColorProps = ColorPickerProps & {
    value?: string;
    hasPrefix?: boolean;
    hasAlpha?: boolean;
    swatches?: string[];
    onValueChange?: (val: string) => void;
};
export declare function Color({ value, hasPrefix, hasAlpha, onValueChange, ...rest }: ColorProps): import("react/jsx-runtime").JSX.Element;
