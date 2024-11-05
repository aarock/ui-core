import { type BoxProps } from "src/box"
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful"
import { GetProps, styled } from "@tamagui/core"

export type ColorPickerProps = GetProps<typeof ColorPicker>
export const ColorPicker = styled( HexColorPicker, {
    name: 'ColorPicker',
    display: "flex",
    borderRadius: 0,
    flexGrow: 1,
} as const )

export type ColorProps = ColorPickerProps & {
    value?: string,
    hasPrefix?: boolean,
    hasAlpha?: boolean,
    swatches?: string[]
    onValueChange?: ( val: string ) => void
}

export function Color ( {
    value,
    hasPrefix,
    hasAlpha,
    // swatches,
    onValueChange,
    ...rest
}: ColorProps ) {

    const Component = hasAlpha ? HexAlphaColorPicker : HexColorPicker

    return <Component
        color={ value }
        // @ts-ignore
        prefixed={ hasPrefix }
        onChange={ onValueChange }
        { ...rest }
    />

}