import { styled, type GetProps, type ColorTokens } from "@tamagui/core"
import { ThemeableStack } from "@tamagui/stacks"

// Variant objects defined outside styled() so they can be shared across components
// without duplicating. `as const` is required by the Tamagui compiler for type inference.

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

// Shorthand variants — write align="start" instead of alignItems="flex-start" etc.
const align = {
    start:    { alignItems: 'flex-start' as const },
    end:      { alignItems: 'flex-end' as const },
    center:   { alignItems: 'center' as const },
    stretch:  { alignItems: 'stretch' as const },
    baseline: { alignItems: 'baseline' as const },
} as const

const justify = {
    start:   { justifyContent: 'flex-start' as const },
    end:     { justifyContent: 'flex-end' as const },
    center:  { justifyContent: 'center' as const },
    between: { justifyContent: 'space-between' as const },
    around:  { justifyContent: 'space-around' as const },
    evenly:  { justifyContent: 'space-evenly' as const },
} as const

const sharedVariants = {
    variant: { card, well },
    shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg },
    align,
    justify,
} as const

export type BoxProps = Omit<GetProps<typeof Box>, 'render'>
export const Box = styled( ThemeableStack, {
    name: 'Box',
    variants: {
        "...size": ( size: number ) => ( { px: size, py: size } ),
        align,
        justify,
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

export type UIColor = ColorTokens | (string & {})

export type ZStackProps = Omit<GetProps<typeof ZStack>, 'render'>
export const ZStack = styled( ThemeableStack, {
    name: 'ZStack',
    position: 'relative',
    variants: sharedVariants,
} as const, { neverFlatten: true, isZStack: true } )
