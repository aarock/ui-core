export declare const baseConfig: {
    defaultFont: string;
    shouldAddPrefersColorThemes: boolean;
    themeClassNameOnRoot: boolean;
    media: {
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
    };
    shorthands: {
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
    };
    fonts: {
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
    };
    mediaQueryDefaultActive: {
        xl: boolean;
        lg: boolean;
        md: boolean;
        sm: boolean;
        xs: boolean;
        xxs: boolean;
    };
    selectionStyles: () => null;
    settings: {
        fastSchemeChange: boolean;
        allowedStyleValues: "somewhat-strict-web";
    };
};
//# sourceMappingURL=base.d.ts.map