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
}, "zIndex" | "color" | "space" | "size" | "radius">, {
    light: any;
    dark: any;
}, {
    textWrap: "whiteSpace";
    text: "textAlign";
    b: "bottom";
    bg: "backgroundColor";
    content: "alignContent";
    grow: "flexGrow";
    items: "alignItems";
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
    heading: {
        family: string;
        size: {
            readonly sm: 12;
            readonly md: 14;
            readonly lg: 18;
            readonly 1: 11;
            readonly 2: 12;
            readonly 3: 13;
            readonly 4: 14;
            readonly 5: 15;
            readonly 6: 16;
            readonly 7: 18;
            readonly 8: 20;
            readonly 9: 24;
            readonly 10: 30;
            readonly 11: 36;
            readonly 12: 48;
            readonly 13: 60;
            readonly 14: 72;
            readonly 15: 96;
            readonly 16: 128;
        };
        lineHeight: {
            [k: string]: number;
        };
        weight: {
            1: string;
            7: string;
        };
        letterSpacing: {
            1: number;
            8: number;
            10: number;
        };
        face: {
            readonly 300: {
                readonly normal: "Inter_300Light";
            };
            readonly 400: {
                readonly normal: "Inter_400Regular";
            };
            readonly 500: {
                readonly normal: "Inter_500Medium";
            };
            readonly 600: {
                readonly normal: "Inter_600SemiBold";
            };
            readonly 700: {
                readonly normal: "Inter_700Bold";
            };
        };
    };
    body: {
        family: string;
        size: {
            readonly sm: 12;
            readonly md: 14;
            readonly lg: 18;
            readonly 1: 11;
            readonly 2: 12;
            readonly 3: 13;
            readonly 4: 14;
            readonly 5: 15;
            readonly 6: 16;
            readonly 7: 18;
            readonly 8: 20;
            readonly 9: 24;
            readonly 10: 30;
            readonly 11: 36;
            readonly 12: 48;
            readonly 13: 60;
            readonly 14: 72;
            readonly 15: 96;
            readonly 16: 128;
        };
        lineHeight: {
            [k: string]: number;
        };
        weight: {
            1: string;
            7: string;
        };
        letterSpacing: {
            1: number;
        };
        face: {
            readonly 300: {
                readonly normal: "Inter_300Light";
            };
            readonly 400: {
                readonly normal: "Inter_400Regular";
            };
            readonly 500: {
                readonly normal: "Inter_500Medium";
            };
            readonly 600: {
                readonly normal: "Inter_600SemiBold";
            };
            readonly 700: {
                readonly normal: "Inter_700Bold";
            };
        };
    };
    mono: {
        family: string;
        size: {
            readonly sm: 12;
            readonly md: 14;
            readonly lg: 18;
            readonly 1: 11;
            readonly 2: 12;
            readonly 3: 13;
            readonly 4: 14;
            readonly 5: 15;
            readonly 6: 16;
            readonly 7: 18;
            readonly 8: 20;
            readonly 9: 24;
            readonly 10: 30;
            readonly 11: 36;
            readonly 12: 48;
            readonly 13: 60;
            readonly 14: 72;
            readonly 15: 96;
            readonly 16: 128;
        };
        lineHeight: {
            [k: string]: number;
        };
        weight: {
            1: string;
        };
        letterSpacing: {
            1: number;
        };
    };
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