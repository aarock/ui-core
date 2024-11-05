import { useFonts } from "expo-font";
export function FontProvider({ fonts, children }) {
    const [isLoaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });
    return isLoaded ? children : null;
}
//# sourceMappingURL=font-provider.native.js.map