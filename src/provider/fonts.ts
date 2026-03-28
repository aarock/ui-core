import { createFont, isWeb } from '@tamagui/core'

const family = isWeb
    ? 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    : 'Inter'

const sizes = {
    sm: 12,
    md: 14,
    lg: 18,
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 15,
    6: 16,
    7: 18,
    8: 20,
    9: 24,
    10: 30,
    11: 36,
    12: 48,
    13: 60,
    14: 72,
    15: 96,
    16: 128,
} as const

// face maps are for native — each weight key maps to the loaded font family name
const face = {
    300: { normal: 'Inter_300Light' },
    400: { normal: 'Inter_400Regular' },
    500: { normal: 'Inter_500Medium' },
    600: { normal: 'Inter_600SemiBold' },
    700: { normal: 'Inter_700Bold' },
} as const

export const fonts = {
    heading: createFont( {
        family,
        size: sizes,
        lineHeight: Object.fromEntries( Object.entries( sizes ).map( ( [ k, v ] ) => [ k, Math.round( +v * 1.2 ) ] ) ),
        weight: { 1: '400', 7: '600' },
        letterSpacing: { 1: 0, 8: -0.5, 10: -1 },
        face,
    } ),
    body: createFont( {
        family,
        size: sizes,
        lineHeight: Object.fromEntries( Object.entries( sizes ).map( ( [ k, v ] ) => [ k, Math.round( +v * 1.45 ) ] ) ),
        weight: { 1: '400', 7: '600' },
        letterSpacing: { 1: 0 },
        face,
    } ),
    mono: createFont( {
        family: isWeb
            ? '"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
            : 'Courier',
        size: sizes,
        lineHeight: Object.fromEntries( Object.entries( sizes ).map( ( [ k, v ] ) => [ k, Math.round( +v * 1.5 ) ] ) ),
        weight: { 1: '500' },
        letterSpacing: { 1: 0 },
    } ),
}
