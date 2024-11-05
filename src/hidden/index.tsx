import { styled, Stack, type GetProps } from "@tamagui/core"

export type HiddenProps = GetProps<typeof Hidden>
export const Hidden = styled( Stack, {
  name: 'Hidden',
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  zIndex: -10000,
  opacity: 0.00000001,
  pointerEvents: "none",
  overflow: "hidden",
  variants: {
    preserveDimensions: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
      }
    },
    visible: {
      true: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: 0,
        zIndex: 0,
        opacity: 1,
        overflow: "visible",
        pointerEvents: "auto",
      }
    }
  }
} )