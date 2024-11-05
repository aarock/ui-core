import { createTokens } from "@tamagui/core"
import {
    indigo, indigoDark,
    purple, purpleDark,
    lime, limeDark,
    ruby, rubyDark,
    amber, amberDark,
    blue, blueDark,
    jade, jadeDark,
    cyan, cyanDark,
    mauve, mauveDark,
    whiteA, blackA,
} from "@radix-ui/colors"

export const baseTokens = createTokens( {
    color: {
        ...expandRadixPalette( mauve, "mauve", "neutralLight" ),
        ...expandRadixPalette( mauveDark, "mauve", "neutralDark" ),

        ...expandRadixPalette( indigo, "indigo", "primaryLight" ),
        ...expandRadixPalette( indigoDark, "indigo", "primaryDark" ),
        //
        // ...expandRadixPalette( purple, "purple", "primaryLight" ),
        // ...expandRadixPalette( purpleDark, "purple", "primaryDark" ),

        ...expandRadixPalette( lime, "lime", "secondaryLight" ),
        ...expandRadixPalette( limeDark, "lime", "secondaryDark" ),

        ...expandRadixPalette( ruby, "ruby", "dangerLight" ),
        ...expandRadixPalette( rubyDark, "ruby", "dangerDark" ),

        ...expandRadixPalette( amber, "amber", "warningLight" ),
        ...expandRadixPalette( amberDark, "amber", "warningDark" ),

        ...expandRadixPalette( blue, "blue", "infoLight" ),
        ...expandRadixPalette( blueDark, "blue", "infoDark" ),

        ...expandRadixPalette( jade, "jade", "successLight" ),
        ...expandRadixPalette( jadeDark, "jade", "successDark" ),

        ...expandRadixPalette( cyan, "cyan", "newLight" ),
        ...expandRadixPalette( cyanDark, "cyan", "newDark" ),

        ...expandRadixPalette( whiteA, "whiteA", "transparentLight" ),
        ...expandRadixPalette( blackA, "blackA", "transparentDark" ),
    },
    radius: {
        sm: 6,
        md: 8,
        lg: 10,
    },
    zIndex: {
        lo: 1,
        md: 10,
        hi: 100,
    },
    space: {
        sm: 6,
        md: 8,
        lg: 10,
    },
    size: {
        sm: 16,
        md: 32,
        lg: 48,
    },
} )

export const baseThemes = {

    light: {
        ...expandRadixPalette( baseTokens.color, "transparentDark", "shadow" ),
        ...expandRadixPalette( baseTokens.color, "transparentLight", "surface" ),

        ...expandRadixPalette( baseTokens.color, "neutralLight", "lighter", -3 ),
        ...expandRadixPalette( baseTokens.color, "neutralLight", "darker", 3 ),

        ...expandRadixPalette( baseTokens.color, "neutralLight", "neutral" ),
        ...expandRadixPalette( baseTokens.color, "primaryLight", "primary" ),
        ...expandRadixPalette( baseTokens.color, "secondaryLight", "secondary" ),
        ...expandRadixPalette( baseTokens.color, "dangerLight", "danger" ),
        ...expandRadixPalette( baseTokens.color, "warningLight", "warning" ),
        ...expandRadixPalette( baseTokens.color, "successLight", "success" ),
        ...expandRadixPalette( baseTokens.color, "infoLight", "info" ),
        ...expandRadixPalette( baseTokens.color, "newLight", "new" ),
    },
    dark: {
        ...expandRadixPalette( baseTokens.color, "transparentDark", "shadow" ),
        ...expandRadixPalette( baseTokens.color, "transparentLight", "surface" ),

        ...expandRadixPalette( baseTokens.color, "neutralDark", "lighter", 3 ),
        ...expandRadixPalette( baseTokens.color, "neutralDark", "darker", -3 ),

        ...expandRadixPalette( baseTokens.color, "neutralDark", "neutral" ),
        ...expandRadixPalette( baseTokens.color, "primaryDark", "primary" ),
        ...expandRadixPalette( baseTokens.color, "secondaryDark", "secondary" ),
        ...expandRadixPalette( baseTokens.color, "dangerDark", "danger" ),
        ...expandRadixPalette( baseTokens.color, "warningDark", "warning" ),
        ...expandRadixPalette( baseTokens.color, "successDark", "success" ),
        ...expandRadixPalette( baseTokens.color, "infoDark", "info" ),
        ...expandRadixPalette( baseTokens.color, "newDark", "new" ),
    },
}

export function expandRadixPalette ( pallete: any, fromName: string, toName: string = fromName, offset = 0 ): any {
    return {
        [ toName + 1 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 1 + offset ) ) ],
        [ toName + 2 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 2 + offset ) ) ],
        [ toName + 3 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 3 + offset ) ) ],
        [ toName + 4 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 4 + offset ) ) ],
        [ toName + 5 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 5 + offset ) ) ],
        [ toName + 6 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 6 + offset ) ) ],
        [ toName + 7 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 7 + offset ) ) ],
        [ toName + 8 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 8 + offset ) ) ],
        [ toName + 9 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 9 + offset ) ) ],
        [ toName + 10 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 10 + offset ) ) ],
        [ toName + 11 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 11 + offset ) ) ],
        [ toName + 12 ]: pallete[ fromName + Math.max( 1, Math.min( 12, 12 + offset ) ) ],
    }
}
