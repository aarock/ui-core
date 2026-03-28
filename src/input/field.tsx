import { ChangeEvent, useContext } from "react"
import { styled, type GetProps } from "@tamagui/core"
import { Text } from "../text"
import { Context, StyledContext } from "./context"

export type InputFieldProps = GetProps<typeof InputFieldBase>
const InputFieldBase = styled( Text, {
    render: "input",
    context: StyledContext,
    flex: 1,
    minWidth: 0,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    variants: {
        variant: {

            default: {
                color: "$neutral12",
                hoverStyle: { color: "$neutral12" },
                focusStyle: { color: "$neutral12" },
            },

            mute: {
                color: "$neutral8",
                hoverStyle: { color: "$neutral8" },
                focusStyle: { color: "$neutral8" },
            },

        },
        size: {
            "$sm": {
                py: "$sm",
                fontSize: 14,
                minHeight: 14 + 2 * 8,
            },
            "$md": {
                py: "$md",
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$lg": {
                py: "$lg",
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            },
        }
    },
    defaultVariants: { variant: "default" }
} as const, {
    accept: { placeholderColor: "color" },
    defaultProps: { placeholder: "" as string },
} as const )

export const InputField = InputFieldBase.styleable<{
    value?: string,
    onChange?: ( event: ChangeEvent<HTMLInputElement> ) => void
}>( ( { onChange, ...props } ) => {

    const { value, onValueChange, isReadOnly } = useContext( Context )

    return <InputFieldBase
        value={ value }
        { ...{
            readOnly: isReadOnly,
            onChange: ( event: ChangeEvent<HTMLInputElement> ) => {
                if ( isReadOnly ) return
                onChange?.( event )
                onValueChange?.( event.target.value )
            }
        } as any }
        { ...props }
    />

} )
