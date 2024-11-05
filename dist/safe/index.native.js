import { styled } from "@tamagui/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const Safe = styled(SafeAreaView, {
    name: 'Safe',
    flexGrow: 1,
    flexShrink: 1,
});
export function useSafeInsets() {
    return useSafeAreaInsets();
}
//# sourceMappingURL=index.native.js.map