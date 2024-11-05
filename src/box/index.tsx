import { styled, type GetProps } from "@tamagui/core"
import { ThemeableStack } from "@tamagui/stacks"

const card = {
    p: "$md",
    gap: "$md",
    bg: "$neutral1",
    borderColor: "$neutral5",
    borderRadius: "$md",
    borderWidth: 1,
} as any

const well = {
    p: "$md",
    gap: "$md",
    bg: "$neutral2",
    borderColor: "$neutral4",
    borderRadius: "$md",
    borderWidth: 1,
} as any

const shadowSm = {
      shadowColor: "$shadow1",
      shadowOffset:{ width:0, height:1 },
      shadowRadius: 1,
} as const

const shadowMd = {
  shadowColor: "$shadow2",
  shadowOffset: { width: 0, height: 1 },
  shadowRadius: 3,
} as const

const shadowLg = {
      shadowColor: "$shadow4",
      shadowOffset: { width:0, height:2 },
      shadowRadius: 5,
} as const

export type BoxProps = GetProps<typeof Box>
export const Box = styled( ThemeableStack, {
    name: 'Box',
    variants: {
        // variant: { card, well },
        // shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg },
        "...size": ( size: number ) => ( {
            px: size,
            py: size,
        } ),
    }
} as const )

export { Unspaced } from "@tamagui/core"

export type XStackProps = GetProps<typeof XStack>
export const XStack = styled( ThemeableStack, {
    flexDirection: 'row',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
} )

export type YStackProps = GetProps<typeof YStack>
export const YStack = styled( ThemeableStack, {
    flexDirection: 'column',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
} )

export type ZStackProps = GetProps<typeof ZStack>
export const ZStack = styled( ThemeableStack, {
    position: 'relative',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
}, { neverFlatten: true, isZStack: true } )
