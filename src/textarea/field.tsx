import { ChangeEvent, useContext } from 'react'
import { styled, type GetProps, Text } from '@tamagui/core'
import { Context, StyledContext } from "./context"

export type TextAreaFieldProps = GetProps<typeof TextAreaFieldBase>
const TextAreaFieldBase = styled( Text, {
    tag: "textarea",
    context: StyledContext,
    flex: 1,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    variants: {
        variant: {

            default: {
                color: '$neutral12',
                hoverStyle: { color: '$neutral12' },
                focusStyle: { color: '$neutral12' },
            },

            mute: {
                color: '$neutral8',
                hoverStyle: { color: '$neutral8' },
                focusStyle: { color: '$neutral8' },
            },

        },
        size: {
            "$sm": {
                py: "$sm",
                pr: "$sm",
                fontSize: 14,
                minHeight: 14 + 2 * 8,
            },
            "$md": {
                py: "$md",
                pr: "$md",
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$lg": {
                py: "$lg",
                pr: "$lg",
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            }
        }
    },
    defaultVariants: { variant: 'default' }
} as const, {
    accept: { placeholderColor: 'color' },
    defaultProps: { placeholder: '' as string, resize: 'vertical' as string },
} as const )

export const TextAreaField = TextAreaFieldBase.styleable<{
    value?: string,
    onChange?: ( value: ChangeEvent<HTMLTextAreaElement> ) => void
}>( ( { onChange, ...props } ) => {

    const { value, onValueChange } = useContext( Context )

    return <TextAreaFieldBase
        value={ value }
        //@ts-ignore
        onChange={ event => {
            const value = event.target.value
            onChange?.( event )
            onValueChange?.( value )
        } }
        { ...props }
    />

} )
