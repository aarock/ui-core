import { forwardRef, type ForwardedRef } from "react"
import { styled, type GetProps } from "@tamagui/core"
import { getIcon } from "../provider"

type _Props = { name?: string, color?: string, fill?: string, stroke?: string }
const _Icon = forwardRef( ( { name, color, ...props }: _Props, ref: ForwardedRef<any> ) => {
    const Comp = getIcon( name || "default" )
    if ( !Comp ) return null
    const { style: { width, height, stroke="none", fill="none" } = {} as any } = ( props || {} ) as any
    return <Comp ref={ undefined } { ...{ color, width, height, stroke, fill } } { ...props } />
} )

export type IconProps = GetProps<typeof Icon>
export const Icon = styled( _Icon, {
    name: "Icon",
    userSelect: "none",
    pointerEvents: "none",
    display: "flex",
    flexShrink: 0,
    variants: {
        size: {
            "$sm": {
                width: 14,
                height: 14,
            },
            "$md": {
                width: 16,
                height: 16,
            },
            "$lg": {
                width: 20,
                height: 20,
            },
        },
    },
    defaultVariants: { size: "$md" }
} as const, {
    accept: { color: 'color' }
} as const )
