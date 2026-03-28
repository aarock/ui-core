import { styled, type GetProps, type GetThemeValueForKey } from "@tamagui/core"
import { ThemeableStack } from "@tamagui/stacks"

const card = {
    p: "$md",
    gap: "$md",
    backgroundColor: "$neutral1",
    borderColor: "$neutral5",
    borderRadius: "$md",
    borderWidth: 1,
} as const

const well = {
    p: "$md",
    gap: "$md",
    backgroundColor: "$neutral2",
    borderColor: "$neutral4",
    borderRadius: "$md",
    borderWidth: 1,
} as const

const shadowSm = {
    shadowColor: "$shadow1",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
} as const

const shadowMd = {
    shadowColor: "$shadow2",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
} as const

const shadowLg = {
    shadowColor: "$shadow4",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
} as const

const sharedVariants = {
    variant: { card, well },
    shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg },
} as const

export type UIColor = GetThemeValueForKey<"color"> // ColorTokens | ( string & {} )
export type BoxProps = Omit<GetProps<typeof Box>, 'render'>
export const Box = styled( ThemeableStack, {
    name: 'Box',
    variants: {
        "...size": ( size: number ) => ( { px: size, py: size } ),
    },
} as const )

export type XStackProps = Omit<GetProps<typeof XStack>, 'render'>
export const XStack = styled( ThemeableStack, {
    name: 'XStack',
    flexDirection: 'row',
    variants: sharedVariants,
} as const )

export type YStackProps = Omit<GetProps<typeof YStack>, 'render'>
export const YStack = styled( ThemeableStack, {
    name: 'YStack',
    flexDirection: 'column',
    variants: sharedVariants,
} as const )

export type ZStackProps = Omit<GetProps<typeof ZStack>, 'render'>
export const ZStack = styled( ThemeableStack, {
    name: 'ZStack',
    position: 'relative',
    variants: sharedVariants,
} as const, { neverFlatten: true, isZStack: true } )
