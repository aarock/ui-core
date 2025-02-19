import { Stack, withStaticProperties, styled, type GetProps } from "@tamagui/core"
import { StyledContext, Context, type ContextProps } from "./context"
import { InputField } from "./field"
import { Icon } from "../icon"
import { useState } from "react"

const InputFrameBase = styled( Stack, {
  context: StyledContext,
  name: "Input",
  minWidth: 0,
  focusable: true,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  outlineWidth: 0,
  variants: {
    variant: {

      default: {

        borderWidth: 1,
        fontFamily: "$body",
        color: "$neutral11",
        borderColor: "$neutral7",
        backgroundColor: "$neutral2",
        shadowRadius: 1, shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 1 },

        hoverStyle: {
          color: "$neutral12",
          borderColor: "$neutral6",
          backgroundColor: "$neutral1",
          shadowRadius: 1, shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
        },

        pressStyle: {
          color: "$neutral12",
          borderColor: "$neutral8",
          backgroundColor: "$neutral1",
          shadowRadius: 0, shadowOpacity: 0,
          shadowOffset: { width: 0, height: 0 },
        },

        focusStyle: {
          color: "$neutral12",
          borderColor: "$neutral8",
          backgroundColor: "$neutral1",
          shadowRadius: 0, shadowOpacity: 0,
          shadowOffset: { width: 0, height: 0 },
        },

      },

      ghost: {
        color: "$neutral12",
        focusStyle: {
          color: "$neutral12",
          backgroundColor: "$neutral2",
        },
      },


    },
    size: {
      "...size": ( size, { tokens } ) => {
        return {
          borderRadius: tokens.radius[ size ],
          minHeight: tokens.size[ size ],
          gap: tokens.space[ size ],
          px: tokens.space[ size ],
        }
      }
    }

  },
} )

export type InputFrameProps = GetProps<typeof InputFrame>
const InputFrame = InputFrameBase.styleable<ContextProps>( ( { value, onFocus, onBlur, onValueChange, ...props } ) => {
  const [ isFocused, setIsFocused ] = useState( false )
  const variant = props?.variant || "default"
  const variantProps: any = InputFrameBase?.staticConfig?.variants?.variant?.[ variant ]
  const focusProps: any = isFocused ? variantProps?.focusStyle : {}
  const hoverProps: any = isFocused ? { hoverStyle: variantProps?.focusStyle } : {}
  return <Context.Provider value={ { value, onValueChange } }>
    <InputFrameBase
      tabIndex={ -1 }
      onFocus={ ( ...args ) => {
        setIsFocused( true )
        onFocus?.( ...args )
      } }
      onBlur={ ( ...args ) => {
        setIsFocused( false )
        onBlur?.( ...args )
      } }
      { ...props }
      { ...focusProps }
      { ...hoverProps }
    />
  </Context.Provider>
} )

export type InputIconProps = GetProps<typeof InputIcon>
const InputIcon = styled( Icon, {
  context: StyledContext,
  name: "ButtonIcon",
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  flexShrink: 0,
  variants: {
    variant: {
      default: {
        color: "$neutral12",
      },
      mute: {
        color: "$neutral8",
      }
    },
    size: {
      "...size": ( size, { tokens } ) => ( {
        py: tokens?.space[ size ],
      } )
    }
  }
} as const )

export type InputAdornmentsProps = GetProps<typeof InputAdornments>
const InputAdornments = styled( Stack, {
  context: StyledContext,
  name: "InputAdornments",
  position: "relative",
  userSelect: "none",
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  flexGrow: 0,
  gap: 0,
} as const )

export type { InputFieldProps } from "./field"
export type InputProps = GetProps<typeof InputFrame>
export const Input = withStaticProperties( InputFrame, {
  Adornments: InputAdornments,
  Frame: InputFrame,
  Field: InputField,
  Icon: InputIcon,
} )