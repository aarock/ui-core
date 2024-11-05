import { styled, Stack, type GetProps } from "@tamagui/core"

export type ScrollProps = GetProps<typeof Scroll>
export const Scroll = styled( Stack, {
  name: 'Scroll',
  flexGrow: 1,
  flexShrink: 1,
  overflow: "scroll",
  variants: {
    fullscreen: {
      true: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      false: {}
    }
  }
} as const )