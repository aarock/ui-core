import { ElementType, type PropsWithChildren } from "react";
export { TamaguiProvider } from "@tamagui/core";
export { createTamagui as createConfig } from "@tamagui/core";
export declare const defaultConfig: import("@tamagui/core").TamaguiInternalConfig<{
    color: {
        [x: string]: import("@tamagui/core").Variable<string>;
    };
    space: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
    size: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
    radius: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        lo: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
} & Omit<{
    color: {
        [x: string]: import("@tamagui/core").Variable<any>;
    };
    radius: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
    zIndex: {
        lo: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        hi: import("@tamagui/core").Variable<number>;
    };
    space: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
    size: {
        sm: import("@tamagui/core").Variable<number>;
        md: import("@tamagui/core").Variable<number>;
        lg: import("@tamagui/core").Variable<number>;
    };
}, "size" | "color" | "space" | "radius" | "zIndex">, {
    light: any;
    dark: any;
}, {
    text: "textAlign";
    b: "bottom";
    bg: "backgroundColor";
    content: "alignContent";
    grow: "flexGrow";
    items: "alignItems";
    justify: "justifyContent";
    l: "left";
    m: "margin";
    maxH: "maxHeight";
    maxW: "maxWidth";
    mb: "marginBottom";
    minH: "minHeight";
    minW: "minWidth";
    ml: "marginLeft";
    mr: "marginRight";
    mt: "marginTop";
    mx: "marginHorizontal";
    my: "marginVertical";
    p: "padding";
    pb: "paddingBottom";
    pl: "paddingLeft";
    pr: "paddingRight";
    pt: "paddingTop";
    px: "paddingHorizontal";
    py: "paddingVertical";
    r: "right";
    rounded: "borderRadius";
    select: "userSelect";
    self: "alignSelf";
    shrink: "flexShrink";
    t: "top";
    z: "zIndex";
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
    }, 1 | 3 | 2 | 5 | 13 | 15 | 4 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
    body: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 3 | 2 | 5 | 13 | 15 | 4 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | "true" | 11 | 16>;
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
    silkscreen: import("@tamagui/core").FillInFont<import("@tamagui/core").GenericFont, 1 | 3 | 2 | 5 | 13 | 15 | 4 | 6 | 7 | 8 | 9 | 10 | 12 | 14 | 11 | 16>;
}, {
    fastSchemeChange: boolean;
    allowedStyleValues: "somewhat-strict-web";
}, "default">;
export type Config = typeof defaultConfig;
export type IconTokens = keyof IconMap;
export type IconMap = Record<string, ElementType<any, any>>;
export type UIProviderProps = PropsWithChildren & {
    theme?: keyof Config['themes'];
    icons?: IconMap;
};
export declare function getIcon(name: string): ElementType;
export declare function getFont(name: string): any;
export declare function UIProvider({ children, icons, theme }: UIProviderProps): import("react/jsx-runtime").JSX.Element;
export { Theme, type ThemeName, useTheme } from "@tamagui/core";
declare module '@tamagui/core' {
    interface TamaguiCustomConfig extends Config {
    }
}
//# sourceMappingURL=index.d.ts.map