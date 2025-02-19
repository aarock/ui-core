import { SizeTokens } from "@tamagui/core";
export type ContextProps = {
    value?: string;
    onChange?: (event: any) => void;
    onValueChange?: (value: string) => void;
};
export declare const Context: import("react").Context<ContextProps>;
export declare const StyledContext: import("@tamagui/core").StyledContext<{
    size: SizeTokens;
    variant: string;
    disabled: boolean;
}>;
//# sourceMappingURL=context.d.ts.map