import { GetProps, styled } from "@tamagui/core"
import { BlurView } from "expo-blur"

export type BlurProps = GetProps<typeof Blur>
export const Blur = styled( BlurView, {
    name: "Blur",
    display: "flex",
    flexGrow: 1,
    intensity: 0,
    variants: {
        variant: {
            none: {
                // @ts-ignore
                intensity: 0,
            },
            subtle: {
                bg: "$surface4",
                // @ts-ignore
                intensity: 6,
            },
            strong: {
                bg: "$surface6",
                // @ts-ignore
                intensity: 16
            },
        },
    },
} as const )
