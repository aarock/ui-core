import { styled, Stack, type GetProps } from "@tamagui/core"

export type Insets = {
  top: number,
  bottom: number,
  left: number,
  right: number
}

export type SafeProps = GetProps<typeof Safe>
export const Safe = styled( Stack, {
  name: 'Safe',
  flexGrow: 1,
  flexShrink: 1,
  overflow: "scroll"
} as const )

export function useSafeInsets (): Insets {
  return { top: 0, bottom: 0, left: 0, right: 0 }
}