import { styled, type GetProps } from "@tamagui/core"
import { animated } from "@react-spring/web"

export type SpringProps = GetProps<typeof Spring>
export const Spring = styled( animated.div, {} ) as any

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
} from "@react-spring/web"