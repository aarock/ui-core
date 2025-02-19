export declare const baseTokens: {
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
}, "color" | "space" | "size" | "radius" | "zIndex">;
export declare const baseThemes: {
    light: any;
    dark: any;
};
export declare function expandRadixPalette(pallete: any, fromName: string, toName?: string, offset?: number): any;
//# sourceMappingURL=tokens.d.ts.map