/**
 * Tamagui compiler config — this file is read at BUILD TIME by the Tamagui
 * babel plugin, tamagui-loader (webpack), @tamagui/vite-plugin, and Metro.
 * It must export the same config that the runtime UIProvider uses.
 *
 * Without this export the compiler cannot do view-flattening or static
 * extraction, so keep it in sync with src/provider/*.
 */
import { createTamagui } from "@tamagui/core"
import { baseAnimations } from "./src/provider/animations"
import { baseTokens, baseThemes } from "./src/provider/tokens"
import { baseConfig } from "./src/provider/base"

const config = createTamagui( {
    ...baseConfig,
    animations: baseAnimations,
    tokens: baseTokens,
    themes: baseThemes,
    settings: {
        fastSchemeChange: true,
        allowedStyleValues: false,
        // allowedStyleValues: 'all',
    },
} )

export type AppConfig = typeof config
declare module "@tamagui/core" {
    interface TamaguiCustomConfig extends AppConfig { }
}

export default config
