import { GetProps } from "@tamagui/core";
export type ColorPickerProps = GetProps<typeof ColorPicker>;
export declare const ColorPicker: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").TamaDefer, any, any, any, any, any>;
export type ColorProps = ColorPickerProps & {
    value?: string;
    hasPrefix?: boolean;
    hasAlpha?: boolean;
    swatches?: string[];
    onValueChange?: (val: string) => void;
};
export declare function Color({ value, hasPrefix, hasAlpha, onValueChange, ...rest }: ColorProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=index.d.ts.map