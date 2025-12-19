import { ElementType, type PropsWithChildren } from "react";
export { TamaguiProvider } from "@tamagui/core";
export { createTamagui as createConfig } from "@tamagui/core";
declare const tg: import("@tamagui/core").TamaguiInternalConfig<{
    color: {
        [x: string]: import("@tamagui/core").Variable<string>;
        [x: number]: import("@tamagui/core").Variable<string>;
        [x: symbol]: import("@tamagui/core").Variable<string>;
    };
    space: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    size: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    radius: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        md: import("@tamagui/core").Variable<number>;
        lo: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
} & Omit<{
    color: {
        [x: string]: import("@tamagui/core").Variable<any>;
        [x: number]: import("@tamagui/core").Variable<any>;
        [x: symbol]: import("@tamagui/core").Variable<any>;
    };
    radius: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        md: import("@tamagui/core").Variable<number>;
        lo: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
    space: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    size: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
}, "color" | "space" | "size" | "radius" | "zIndex">, {
    light: any;
    dark: any;
}, {
    readonly ussel: "userSelect";
    readonly cur: "cursor";
    readonly pe: "pointerEvents";
    readonly col: "color";
    readonly ff: "fontFamily";
    readonly fos: "fontSize";
    readonly fost: "fontStyle";
    readonly fow: "fontWeight";
    readonly ls: "letterSpacing";
    readonly lh: "lineHeight";
    readonly ta: "textAlign";
    readonly tt: "textTransform";
    readonly ww: "wordWrap";
    readonly ac: "alignContent";
    readonly ai: "alignItems";
    readonly als: "alignSelf";
    readonly b: "bottom";
    readonly bc: "backgroundColor";
    readonly bg: "backgroundColor";
    readonly bbc: "borderBottomColor";
    readonly bblr: "borderBottomLeftRadius";
    readonly bbrr: "borderBottomRightRadius";
    readonly bbw: "borderBottomWidth";
    readonly blc: "borderLeftColor";
    readonly blw: "borderLeftWidth";
    readonly boc: "borderColor";
    readonly br: "borderRadius";
    readonly bs: "borderStyle";
    readonly brw: "borderRightWidth";
    readonly brc: "borderRightColor";
    readonly btc: "borderTopColor";
    readonly btlr: "borderTopLeftRadius";
    readonly btrr: "borderTopRightRadius";
    readonly btw: "borderTopWidth";
    readonly bw: "borderWidth";
    readonly dsp: "display";
    readonly f: "flex";
    readonly fb: "flexBasis";
    readonly fd: "flexDirection";
    readonly fg: "flexGrow";
    readonly fs: "flexShrink";
    readonly fw: "flexWrap";
    readonly h: "height";
    readonly jc: "justifyContent";
    readonly l: "left";
    readonly m: "margin";
    readonly mah: "maxHeight";
    readonly maw: "maxWidth";
    readonly mb: "marginBottom";
    readonly mih: "minHeight";
    readonly miw: "minWidth";
    readonly ml: "marginLeft";
    readonly mr: "marginRight";
    readonly mt: "marginTop";
    readonly mx: "marginHorizontal";
    readonly my: "marginVertical";
    readonly o: "opacity";
    readonly ov: "overflow";
    readonly p: "padding";
    readonly pb: "paddingBottom";
    readonly pl: "paddingLeft";
    readonly pos: "position";
    readonly pr: "paddingRight";
    readonly pt: "paddingTop";
    readonly px: "paddingHorizontal";
    readonly py: "paddingVertical";
    readonly r: "right";
    readonly shac: "shadowColor";
    readonly shar: "shadowRadius";
    readonly shof: "shadowOffset";
    readonly shop: "shadowOpacity";
    readonly t: "top";
    readonly w: "width";
    readonly zi: "zIndex";
}, {
    xl: {
        maxWidth: number;
    };
    lg: {
        maxWidth: number;
    };
    md: {
        maxWidth: number;
    };
    sm: {
        maxWidth: number;
    };
    xs: {
        maxWidth: number;
    };
    xxs: {
        maxWidth: number;
    };
    gtXs: {
        minWidth: number;
    };
    gtSm: {
        minWidth: number;
    };
    gtMd: {
        minWidth: number;
    };
    gtLg: {
        minWidth: number;
    };
    gtXl: {
        minWidth: number;
    };
}, {
    fast: string;
    medium: string;
    slow: string;
}, {
    heading: import("@tamagui/core").FillInFont<{
        size: {
            5: number;
            6: number;
            9: number;
            10: number;
        };
        transform: {
            6: "uppercase";
            7: "none";
        };
        weight: {
            6: string;
            7: string;
        };
        color: {
            6: string;
            7: string;
        };
        letterSpacing: {
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            12: number;
            14: number;
            15: number;
        };
        face: {
            700: {
                normal: string;
            };
            800: {
                normal: string;
            };
            900: {
                normal: string;
            };
        };
    }, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
    body: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
    mono: {
        weight: {
            1: string;
        };
        size: {
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            11: number;
            12: number;
            13: number;
            14: number;
            15: number;
            16: number;
        };
    };
    silkscreen: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 11 | 16>;
}, {
    allowedStyleValues: false;
    autocompleteSpecificTokens: "except-special";
}>;
type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
export type Config = typeof tg;
export type IconTokens = keyof IconMap;
export type IconMap = Record<string, ElementType<any, any>>;
export type UIProviderProps = PropsWithChildren & {
    theme?: keyof Config['themes'];
    config?: DeepPartial<Config>;
    icons?: IconMap;
};
export declare function getIcon(name: string): ElementType;
export declare function UIProvider({ children, config, icons, theme }: UIProviderProps): import("react/jsx-runtime").JSX.Element;
export { Theme, type ThemeName, useTheme } from "@tamagui/core";
export declare const defaultConfig: import("@tamagui/core").TamaguiInternalConfig<Omit<{
    color: {
        [x: string]: import("@tamagui/core").Variable<string>;
        [x: number]: import("@tamagui/core").Variable<string>;
        [x: symbol]: import("@tamagui/core").Variable<string>;
    };
    space: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    size: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    radius: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        md: import("@tamagui/core").Variable<number>;
        lo: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
}, import("@tamagui/core").TokenCategories> & {
    color: {
        [x: string]: import("@tamagui/core").Variable<string>;
        [x: number]: import("@tamagui/core").Variable<string>;
        [x: symbol]: import("@tamagui/core").Variable<string>;
    };
    space: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    size: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    radius: {
        lg: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        sm: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        md: import("@tamagui/core").Variable<number>;
        lo: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
}, {
    light: {
        [x: string]: any;
    };
    dark: {
        [x: string]: any;
    };
}, {
    readonly ussel: "userSelect";
    readonly cur: "cursor";
    readonly pe: "pointerEvents";
    readonly col: "color";
    readonly ff: "fontFamily";
    readonly fos: "fontSize";
    readonly fost: "fontStyle";
    readonly fow: "fontWeight";
    readonly ls: "letterSpacing";
    readonly lh: "lineHeight";
    readonly ta: "textAlign";
    readonly tt: "textTransform";
    readonly ww: "wordWrap";
    readonly ac: "alignContent";
    readonly ai: "alignItems";
    readonly als: "alignSelf";
    readonly b: "bottom";
    readonly bc: "backgroundColor";
    readonly bg: "backgroundColor";
    readonly bbc: "borderBottomColor";
    readonly bblr: "borderBottomLeftRadius";
    readonly bbrr: "borderBottomRightRadius";
    readonly bbw: "borderBottomWidth";
    readonly blc: "borderLeftColor";
    readonly blw: "borderLeftWidth";
    readonly boc: "borderColor";
    readonly br: "borderRadius";
    readonly bs: "borderStyle";
    readonly brw: "borderRightWidth";
    readonly brc: "borderRightColor";
    readonly btc: "borderTopColor";
    readonly btlr: "borderTopLeftRadius";
    readonly btrr: "borderTopRightRadius";
    readonly btw: "borderTopWidth";
    readonly bw: "borderWidth";
    readonly dsp: "display";
    readonly f: "flex";
    readonly fb: "flexBasis";
    readonly fd: "flexDirection";
    readonly fg: "flexGrow";
    readonly fs: "flexShrink";
    readonly fw: "flexWrap";
    readonly h: "height";
    readonly jc: "justifyContent";
    readonly l: "left";
    readonly m: "margin";
    readonly mah: "maxHeight";
    readonly maw: "maxWidth";
    readonly mb: "marginBottom";
    readonly mih: "minHeight";
    readonly miw: "minWidth";
    readonly ml: "marginLeft";
    readonly mr: "marginRight";
    readonly mt: "marginTop";
    readonly mx: "marginHorizontal";
    readonly my: "marginVertical";
    readonly o: "opacity";
    readonly ov: "overflow";
    readonly p: "padding";
    readonly pb: "paddingBottom";
    readonly pl: "paddingLeft";
    readonly pos: "position";
    readonly pr: "paddingRight";
    readonly pt: "paddingTop";
    readonly px: "paddingHorizontal";
    readonly py: "paddingVertical";
    readonly r: "right";
    readonly shac: "shadowColor";
    readonly shar: "shadowRadius";
    readonly shof: "shadowOffset";
    readonly shop: "shadowOpacity";
    readonly t: "top";
    readonly w: "width";
    readonly zi: "zIndex";
}, {
    xl: {
        maxWidth: number;
    };
    lg: {
        maxWidth: number;
    };
    md: {
        maxWidth: number;
    };
    sm: {
        maxWidth: number;
    };
    xs: {
        maxWidth: number;
    };
    xxs: {
        maxWidth: number;
    };
    gtXs: {
        minWidth: number;
    };
    gtSm: {
        minWidth: number;
    };
    gtMd: {
        minWidth: number;
    };
    gtLg: {
        minWidth: number;
    };
    gtXl: {
        minWidth: number;
    };
}, {
    fast: string;
    medium: string;
    slow: string;
}, {
    body: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
    heading: import("@tamagui/core").FillInFont<{
        size: {
            5: number;
            6: number;
            9: number;
            10: number;
        };
        transform: {
            6: "uppercase";
            7: "none";
        };
        weight: {
            6: string;
            7: string;
        };
        color: {
            6: string;
            7: string;
        };
        letterSpacing: {
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            12: number;
            14: number;
            15: number;
        };
        face: {
            700: {
                normal: string;
            };
            800: {
                normal: string;
            };
            900: {
                normal: string;
            };
        };
    }, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
    mono: {
        weight: {
            1: string;
        };
        size: {
            1: number;
            2: number;
            3: number;
            4: number;
            5: number;
            6: number;
            7: number;
            8: number;
            9: number;
            10: number;
            11: number;
            12: number;
            13: number;
            14: number;
            15: number;
            16: number;
        };
    };
    silkscreen: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 13 | 15 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 11 | 16>;
}, {
    allowedStyleValues: false;
    autocompleteSpecificTokens: "except-special";
} & Omit<import("@tamagui/core").GenericTamaguiSettings, keyof {
    allowedStyleValues: false;
    autocompleteSpecificTokens: "except-special";
}>>;
export declare function getFont(name: string): any;
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Config {
    }
}
