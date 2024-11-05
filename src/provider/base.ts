import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes/v2'
import { CreateTamaguiProps } from '@tamagui/web'
import { media, mediaQueryDefaultActive } from './media'
import { fonts } from './fonts'

export const baseConfig = {
    defaultFont: 'body',
    shouldAddPrefersColorThemes: true,
    themeClassNameOnRoot: false,
    media,
    shorthands,
    tokens,
    fonts,
    mediaQueryDefaultActive: mediaQueryDefaultActive,
    selectionStyles: ( theme ) => null,
} satisfies CreateTamaguiProps