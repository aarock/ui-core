import { styled, type GetProps } from "@tamagui/core"
import { animated } from "@react-spring/native"

export type SpringProps = GetProps<typeof Spring>
export const Spring = styled( animated.View, {} )

export {
    useSpring,
    useSprings,
    useSpringValue,
    useChain,
    useInView,
    useTrail,
    useTransition,
    easings,
    config,
    type SpringConfig
} from "@react-spring/native"