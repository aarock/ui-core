import { GetProps, styled } from "@tamagui/core"
import { YStack } from "../box"

export type BlurProps = GetProps<typeof Blur>
export const Blur = styled( YStack, {
    name: 'Blur',
    display: "flex",
    position: "relative",
    backdropFilter: "blur(4px)",
    flexGrow: 1,
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
} as const )
