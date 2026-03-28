import { SizeTokens, createStyledContext } from "@tamagui/core"
import { createContext } from "react"

export type ContextProps = {
    value?: string,
    onChange?: ( event: any ) => void
    onValueChange?: ( value: string ) => void
    isReadOnly?: boolean
}

export const Context = createContext<ContextProps>( {
    value: "",
    onChange: () => { },
    onValueChange: () => { },
    isReadOnly: false,
} )

export const StyledContext = createStyledContext( {
    size: "$md" as SizeTokens,
    variant: "default",
    disabled: false,
    isReadOnly: false,
} )