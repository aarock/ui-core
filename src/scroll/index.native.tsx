import { styled, type GetProps } from "@tamagui/core"
// import { ScrollView } from "react-native-gesture-handler"
import { ScrollView } from "react-native"

export type ScrollProps = GetProps<typeof Scroll>
export const Scroll = styled( ScrollView, {
  name: 'Scroll',
  flexGrow: 1,
  flexShrink: 1,
  overflow: "scroll",
  keyboardDismissMode: 'none',
  keyboardShouldPersistTaps: 'always'
} as const )