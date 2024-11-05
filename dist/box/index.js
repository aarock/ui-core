import { styled } from "@tamagui/core";
import { ThemeableStack } from "@tamagui/stacks";
const card = {
    p: "$md",
    gap: "$md",
    bg: "$neutral1",
    borderColor: "$neutral5",
    borderRadius: "$md",
    borderWidth: 1,
};
const well = {
    p: "$md",
    gap: "$md",
    bg: "$neutral2",
    borderColor: "$neutral4",
    borderRadius: "$md",
    borderWidth: 1,
};
const shadowSm = {
    shadowColor: "$shadow1",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
};
const shadowMd = {
    shadowColor: "$shadow2",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
};
const shadowLg = {
    shadowColor: "$shadow4",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
};
export const Box = styled(ThemeableStack, {
    name: 'Box',
    variants: {
        // variant: { card, well },
        // shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg },
        "...size": (size) => ({
            px: size,
            py: size,
        }),
    }
});
export { Unspaced } from "@tamagui/core";
export const XStack = styled(ThemeableStack, {
    flexDirection: 'row',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
});
export const YStack = styled(ThemeableStack, {
    flexDirection: 'column',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
});
export const ZStack = styled(ThemeableStack, {
    position: 'relative',
    variants: { variant: { card, well }, shadow: { $sm: shadowSm, $md: shadowMd, $lg: shadowLg } }
}, { neverFlatten: true, isZStack: true });
//# sourceMappingURL=index.js.map