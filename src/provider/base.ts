import { shorthands as v5Shorthands } from '@tamagui/shorthands/v5'
import { media, mediaQueryDefaultActive } from './media'
import { fonts } from './fonts'

// `justify` from v5 maps directly to justifyContent (a string shorthand) which
// conflicts with our custom `justify` variant on Box/XStack/YStack that uses
// semantic keys ("start"|"end"|"between" etc.). Remove it so only the variant wins.
const { justify: _j, ...rest } = v5Shorthands
const shorthands = { ...rest, textWrap: 'whiteSpace' as const }

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
        // Speeds up theme switching between light/dark without a full re-render
        fastSchemeChange: true,
        // Warn in dev if style values fall outside your token set
        allowedStyleValues: 'somewhat-strict-web' as const,
    },
}
