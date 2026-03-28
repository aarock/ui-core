import { ElementType, createContext, type PropsWithChildren, useContext } from "react"
import { TamaguiProvider, createTamagui } from "@tamagui/core"
import { PortalProvider } from "@tamagui/portal"

import { SafeAreaProvider } from "./safe-area-provider"
import { FontProvider } from "./font-provider"
import { baseAnimations } from "./animations"
import { baseTokens, baseThemes } from "./tokens"
import { baseConfig } from "./base"

export { TamaguiProvider } from "@tamagui/core"
export { createTamagui as createConfig } from "@tamagui/core"

// Single createTamagui call — used for both the runtime provider and type exports.
// Keep in sync with the root tamagui.config.ts which the compiler reads at build time.
export const defaultConfig = createTamagui( {
    ...baseConfig,
    animations: baseAnimations,
    tokens: baseTokens,
    themes: baseThemes,
} )

export type Config = typeof defaultConfig
export type IconTokens = keyof IconMap
export type IconMap = Record<string, ElementType<any, any>>
export type UIProviderProps = PropsWithChildren & {
    theme?: keyof Config[ 'themes' ]
    icons?: IconMap,
}

const IconContext = createContext<IconMap>( {} )
export function getIcon ( name: string ): ElementType {
    return useContext( IconContext )[ name ]
}

export function getFont ( name: string ) {
    return defaultConfig?.fonts?.[ name ]?.family || "Helvetica"
}

export function UIProvider ( {
    children,
    icons,
    theme = "light"
}: UIProviderProps ) {
    return <TamaguiProvider config={ defaultConfig } defaultTheme={ theme }>
        <IconContext.Provider value={ { ...icons } }>
            <FontProvider fonts={ defaultConfig.fonts }>
                <PortalProvider>
                    <SafeAreaProvider>
                        { children || null }
                    </SafeAreaProvider>
                </PortalProvider>
            </FontProvider>
        </IconContext.Provider>
    </TamaguiProvider>
}

export { Theme, type ThemeName, useTheme } from "@tamagui/core"

declare module '@tamagui/core' { interface TamaguiCustomConfig extends Config { } }
