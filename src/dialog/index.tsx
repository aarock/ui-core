import { PropsWithChildren, useState } from "react"

import {
  useFloating,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  useId,
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal
} from "@floating-ui/react"

import { Box, XStack, YStack, type BoxProps, type XStackProps, type YStackProps } from "../box"
import { Blur } from "../blur"
import { Icon } from "../icon"
import { Text } from "../text"

import { AnimatePresence } from "@tamagui/animate-presence"
import { withStaticProperties } from "@tamagui/core"

export type DialogProps = PropsWithChildren & {
  isOpen?: boolean
  onOpenChange?: ( open: boolean ) => void
  render?: ( getProps: () => BoxProps, setOpen: ( isOpen: boolean ) => void ) => void
}

function DialogFrame ( {
  isOpen: controlledIsOpen,
  onOpenChange,
  render, children }: DialogProps ) {

  const [ _isOpen, _setOpen ] = useState( controlledIsOpen )
  const isOpen = controlledIsOpen ?? _isOpen
  const setOpen = onOpenChange ?? _setOpen

  const { refs, context } = useFloating( {
    open: isOpen,
    onOpenChange: setOpen
  } )

  const click = useClick( context )
  const role = useRole( context )
  const dismiss = useDismiss( context, { outsidePressEvent: "mousedown" } )

  const { getReferenceProps, getFloatingProps } = useInteractions( [
    click,
    role,
    dismiss
  ] )

  const headingId = useId()
  const descriptionId = useId()

  return <FloatingPortal>
    <AnimatePresence>{ isOpen &&
      <Blur
        { ...{ fullscreen: true, transition: "slow", variant: "subtle" } as any }
        enterStyle={ { opacity: 0 } }
        exitStyle={ { opacity: 0 } }
        onPress={ () => setOpen( false ) }
        zIndex={ 100 }
      />
    }</AnimatePresence>
    <AnimatePresence>{ isOpen &&
      <FloatingOverlay className="Dialog-overlay" lockScroll style={ { zIndex: 200 } }>
        <FloatingFocusManager context={ context }>
          <Box
            position="absolute" top={ 0 } left={ 0 } right={ 0 } bottom={ 0 }

            transition="medium"
            enterStyle={ { opacity: 0, y: -4, scale: 1.02 } }
            exitStyle={ { opacity: 0, y: -4, scale: 1.02 } }

            alignItems="center"
            justifyContent="center"
            ref={ refs.setFloating as any }
            aria-labelledby={ headingId }
            aria-describedby={ descriptionId }
            { ...getFloatingProps() as any }
          >{ render?.( getReferenceProps, setOpen ) }{ children }</Box>
        </FloatingFocusManager>
      </FloatingOverlay>
    }</AnimatePresence>
  </FloatingPortal>
}

function DialogContent ( props: YStackProps ) {
  return <YStack
    variant="card"
    p="$lg"
    gap="$lg"
    shadow="$lg"
    minWidth={ 200 }
    maxWidth={ 400 }
    position="relative"
    zIndex={ 2000 }
    { ...props } />
}

export type DialogHeaderProps = XStackProps & {
  icon?: string
  color?: string
  label: string
}

function DialogHeader ( { icon, color, label, ...props }: DialogHeaderProps ) {
  return <XStack p="$lg" gap="$lg" alignItems="center" { ...props }>
    { icon && <Icon name={ icon } size="$lg" color={ color as any } /> }
    <Text fontSize={ 20 } fontWeight={ 500 }>{ label }</Text>
  </XStack>
}

function DialogBody ( { ...props }: YStackProps ) {
  return <YStack px="$lg" gap="$lg" { ...props } />
}

function DialogFooter ( { ...props }: YStackProps ) {
  return <XStack p="$lg" gap="$lg" flexDirection="row-reverse" { ...props } />
}

export const Dialog = withStaticProperties( DialogFrame, {
  Frame: DialogFrame,
  Content: DialogContent,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
} )
