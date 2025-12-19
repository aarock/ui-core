import { GetProps, styled } from "@tamagui/core"
import { Portal as PortalBase } from "@tamagui/portal"

export type PortalProps = GetProps<typeof Portal>
export const Portal = styled( PortalBase, {
    name: 'Portal',
    position: "absolute",
    display: "flex",
    flexGrow: 1,
    stackZIndex: true,
} as const )
