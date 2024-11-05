import { styled, type GetProps } from "@tamagui/core"
import { SafeAreaView } from "react-native-safe-area-context"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { type Insets } from "./index.js"

export type SafeProps = GetProps<typeof Safe>
export const Safe = styled( SafeAreaView, {
  name: 'Safe',
  flexGrow: 1,
  flexShrink: 1,
} as const )

export function useSafeInsets (): Insets {
  return useSafeAreaInsets()
}