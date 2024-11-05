import { styled, Stack } from "@tamagui/core";
export const Scroll = styled(Stack, {
    name: 'Scroll',
    flexGrow: 1,
    flexShrink: 1,
    overflow: "scroll",
    variants: {
        fullscreen: {
            true: {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            false: {}
        }
    }
});
//# sourceMappingURL=index.js.map