import { ChangeEvent, useContext } from 'react'
import { styled, type GetProps, Text } from '@tamagui/core'
import { Context, StyledContext } from "./context"

export type InputFieldProps = GetProps<typeof InputFieldBase>
const InputFieldBase = styled( Text, {
    tag: "input",
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
            // "...size": ( size, { tokens } ) => ( {
            //     minHeight: ( tokens?.size[ size ].val || 0 ) + ( tokens?.space[ size ].val || 0 ),
            // } )
        }
    },
    defaultVariants: { variant: 'default' }
} as const, {
    accept: { placeholderColor: 'color' },
    defaultProps: { placeholder: '' as string },
} as const )

export const InputField = InputFieldBase.styleable<{
    value?: string,
    onChange?: ( value: ChangeEvent<HTMLInputElement> ) => void
}>( ( { onChange, ...props }, ref ) => {

    const { value, onValueChange } = useContext( Context )

    return <InputFieldBase
        ref={ ref }
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
