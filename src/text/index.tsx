import { Text as Base, styled } from "@tamagui/core"
export { type TextProps } from "@tamagui/core"

// export type TextProps = GetProps<typeof Text>
export const Text = styled( Base, {
    name: 'Text',
    color: '$neutral12',
    // bg: "$primary",
} as const )