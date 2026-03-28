import { View, type GetProps } from "@tamagui/core";
type StackProps = GetProps<typeof View>;
import { type SpringConfig } from "../animation";
export type RevealProps = StackProps & {
    config?: SpringConfig;
};
export declare function Reveal({ config, children, ...rest }: RevealProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map