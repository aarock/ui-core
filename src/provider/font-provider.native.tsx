import { useFonts } from "expo-font"
import { type FontProviderProps } from "./font-provider.js"

export function FontProvider ( { fonts, children }: FontProviderProps ) {

    const [ isLoaded ] = useFonts( {
        Inter: require( "@tamagui/font-inter/otf/Inter-Medium.otf" ),
        InterBold: require( "@tamagui/font-inter/otf/Inter-Bold.otf" ),
    } )


    return isLoaded ? children : null

}