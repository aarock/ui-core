import { styled, Stack } from "@tamagui/core";
export const Safe = styled(Stack, {
    name: 'Safe',
    flexGrow: 1,
    flexShrink: 1,
    overflow: "scroll"
});
export function useSafeInsets() {
    return { top: 0, bottom: 0, left: 0, right: 0 };
}
//# sourceMappingURL=index.js.map