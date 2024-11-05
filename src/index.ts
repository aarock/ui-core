export { Stack, styled, withStaticProperties, type GetProps, type TamaguiElement as UIElement } from "@tamagui/core"
export { AnimatePresence, type AnimatePresenceProps } from "@tamagui/animate-presence"
export { PortalProvider as Destination } from "@tamagui/portal"
export { Slot, type SlotProps } from "@radix-ui/react-slot"

// STRUCTURE //
export * from "./box"
export * from "./text"
export * from "./table"
// UTILITY //
export * from "./svg"
export * from "./safe"
export * from "./scroll"
export * from "./floating"
export * from "./dialog"
export * from "./spacer"
export * from "./sort"
export * from "./blur"
export * from "./portal"
// UI BASICS //
export * from "./icon"
export * from "./button"
export * from "./input"
export * from "./textarea"
export * from "./use-measure"
// COMPOSITION //
export * from "./animation"
export * from "./provider"
// KIT CANDIDATES //
export * from "./color"
export * from "./gradient"

declare module '@tamagui/core' {
    interface TypeOverride { groupNames (): 'btn' | 'ipt' }
}
