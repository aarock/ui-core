import { styled } from "@tamagui/core";
import { YStack } from "../box";
export const Blur = styled(YStack, {
    name: 'Blur',
    display: "flex",
    flexGrow: 1,
    backdropFilter: "blur(4px)",
    style: { WebkitBackdropFilter: "blur(4px)" },
    variants: {
        variant: {
            none: {
                backdropFilter: "blur(0px)",
                style: { WebkitBackdropFilter: "blur(0px)" },
            },
            subtle: {
                backdropFilter: "blur(4px)",
                style: { WebkitBackdropFilter: "blur(4px)" },
            },
            strong: {
                backdropFilter: "blur(16px)",
                style: { WebkitBackdropFilter: "blur(16px)" },
            },
        }
    }
});
//# sourceMappingURL=index.js.map