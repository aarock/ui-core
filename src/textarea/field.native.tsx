import { useContext } from 'react'
import { TextInput } from "react-native"
import { styled, type GetProps, useTheme } from '@tamagui/core'
import { Context, StyledContext } from "./context"

export type InputFieldProps = GetProps<typeof InputFieldBase>

const InputFieldBase = styled( TextInput, {
    context: StyledContext,
    flex: 1,
    borderWidth: 0,
    outlineWidth: 0,
    outlineStyle: "none",
    backgroundColor: "transparent",
    multiline: true,
    variants: {
        variant: {

            default: {
                //@ts-ignore
                color: '$neutral12',
                //@ts-ignore
                hoverStyle: { color: '$neutral12' },
                //@ts-ignore
                focusStyle: { color: '$neutral12' },
            },

            isDisabled: {
                //@ts-ignore
                color: '$neutral8',
                //@ts-ignore
                hoverStyle: { color: '$neutral8' },
                //@ts-ignore
                focusStyle: { color: '$neutral8' },
            },

        },
        size: {
            "$sm": {
                //@ts-ignore
                fontSize: 16,
                minHeight: 16 + 2 * 8,
            },
            "$md": {
                //@ts-ignore
                fontSize: 18,
                minHeight: 18 + 2 * 8,
            },
            "$lg": {
                //@ts-ignore
                fontSize: 20,
                minHeight: 20 + 2 * 8,
            },
        }

        // size: {
        //     "...size": ( size, { tokens } ) => ( {
        //         minHeight: ( tokens?.size[ size ].val || 0 ) + ( tokens?.space[ size ].val || 0 ),
        //     } )
        // }
    }
} as const, { accept: { placeholderColor: 'color' } } as const )

export const InputField = InputFieldBase.styleable( ( props ) => {

    const { value, onValueChange, onChange } = useContext( Context )

    const theme = useTheme()
    const placeholderColorProp = props.placeholderTextColor ?? props.placeholderColor ?? "$neutral7"
    const placeholderTextColor =
        theme[ placeholderColorProp as any ]?.get() ??
        placeholderColorProp ??
        theme.placeholderColor?.get() ??
        "black"

    return <InputFieldBase
        editable={ !props.disabled }
        placeholderTextColor={ placeholderTextColor }
        { ...props }
        value={ value }
        onChangeText={ text => {
            onValueChange?.( text )
        } }
        onChange={ event => {
            onChange?.( event )
            // onValueChange?.( event?.nativeEvent?.text )
        } }
    />

} )
