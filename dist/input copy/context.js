import { createStyledContext } from "@tamagui/core";
import { createContext } from "react";
export const Context = createContext({
    value: "",
    onChange: () => { },
    onValueChange: () => { },
});
export const StyledContext = createStyledContext({
    size: "$md",
    variant: "default",
    disabled: false,
});
//# sourceMappingURL=context.js.map