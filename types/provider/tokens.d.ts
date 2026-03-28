export declare const baseTokens: {
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
}, "zIndex" | "color" | "space" | "size" | "radius">;
export declare const baseThemes: {
    light: any;
    dark: any;
};
export declare function expandRadixPalette(pallete: any, fromName: string, toName?: string, offset?: number): any;
//# sourceMappingURL=tokens.d.ts.map