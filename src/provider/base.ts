import { shorthands } from '@tamagui/shorthands/v5'
import { media, mediaQueryDefaultActive } from './media'
import { fonts } from './fonts'

// baseConfig is validated at the createTamagui() call site in index.tsx and
// tamagui.config.ts — no need to import CreateTamaguiProps here.
export const baseConfig = {
    defaultFont: 'body',
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: false,
    media,
    shorthands,
    fonts,
    mediaQueryDefaultActive,
    selectionStyles: () => null,
    settings: {
        fastSchemeChange: true,
        allowedStyleValues: false,
    },
}
