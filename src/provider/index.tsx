import { ElementType, useMemo, createContext, type PropsWithChildren, useContext } from "react"
import { TamaguiProvider, createTamagui } from "@tamagui/core"
import { SafeAreaProvider } from "./safe-area-provider"
import { FontProvider } from "./font-provider"
import { PortalProvider } from "./portal-provider"
import { baseAnimations } from "./animations"
import { baseTokens } from "./tokens"
import { baseThemes } from "./tokens"
import { baseConfig } from "./base"

export { TamaguiProvider } from "@tamagui/core"
export { createTamagui as createConfig } from "@tamagui/core"

const tg = createTamagui( {
    ...baseConfig,
    animations: baseAnimations,
    tokens: baseTokens,
    themes: baseThemes,
} )

type DeepPartial<T> = { [ K in keyof T ]?: T[ K ] extends object ? DeepPartial<T[ K ]> : T[ K ] }
export type Config = typeof tg
export type IconTokens = keyof IconMap
export type IconMap = Record<string, ElementType<any, any>>
export type UIProviderProps = PropsWithChildren & {
    theme?: keyof Config[ 'themes' ]
    config?: DeepPartial<Config>
    icons?: IconMap,
}

const Context = createContext<IconMap>( {} )
const IconProvider = Context.Provider
export function getIcon ( name: string ): ElementType {
    return useContext( Context )[ name ]
}

export function UIProvider ( {
    children,
    config,
    icons,
    theme = "light"
}: UIProviderProps ) {

    const mergedConfig = useMemo( () => createTamagui( {
        ...baseConfig,
        ...config,
        animations: baseAnimations,
        tokens: baseTokens,
        themes: baseThemes,
    } as Config ), [] )

    return <TamaguiProvider config={ mergedConfig } defaultTheme={ theme }>
        <IconProvider value={ { ...icons } }>
            <FontProvider fonts={ mergedConfig.fonts }>
                <PortalProvider>
                    <SafeAreaProvider>
                        { children || null }
                    </SafeAreaProvider>
                </PortalProvider>
            </FontProvider>
        </IconProvider>
    </TamaguiProvider>

}

export { Theme, type ThemeName, useTheme } from "@tamagui/core"

export const defaultConfig = createTamagui( {
    ...baseConfig,
    animations: baseAnimations,
    tokens: baseTokens,
    themes: baseThemes,
} as unknown as Config )

export function getFont ( name: string ) {
    return defaultConfig?.fonts?.[ name ]?.family || "Helvetica"
}

declare module '@tamagui/core' { interface TamaguiCustomConfig extends Config { } }
