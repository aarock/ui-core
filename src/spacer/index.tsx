import { GetProps, Stack, styled } from "@tamagui/core"

export type SpacerProps = GetProps<typeof Spacer>

export const Spacer = styled( Stack, {
    name: "Spacer",
    display: "flex",
    minWidth: 1,
    minHeight: 1,
    flexShrink: 1,
    flexGrow: 1,
} as const )
