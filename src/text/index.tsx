import { Text as Base, styled } from "@tamagui/core"
export { type TextProps } from "@tamagui/core"

export const Text = styled( Base, {
    name: 'Text',
    color: '$neutral12',
} as const )