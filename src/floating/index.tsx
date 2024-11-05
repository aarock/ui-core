import { FC, Fragment, PropsWithChildren, MutableRefObject, createContext, useContext, useImperativeHandle, useRef, useState } from "react"
import { Box, type BoxProps } from "../box"
import { Slot } from "@radix-ui/react-slot"

import {
  useFloating,
  useInteractions,
  useClick,
  useHover,
  useFocus,
  flip,
  shift,
  offset,
  size,
  inline,
  autoUpdate,
  useRole,
  useDismiss,
} from "@floating-ui/react"

import { Portal } from "@tamagui/portal"

export type FloatingProps = Omit<BoxProps, "asChild"> & {
  actions?: MutableRefObject<FloatingActions|undefined>
  strategy?: "absolute" | "fixed"
  placement?: "top" | "bottom" | "left" | "right" | "top-start" | "bottom-start" | "left-start" | "right-start" | "top-end" | "bottom-end" | "left-end" | "right-end"
  role?: "tooltip" | "dialog" | "alertdialog" | "menu" | "listbox" | "grid" | "tree" | undefined
  delay?: number | Partial<{ open: number, close: number }> | undefined
  // to?: string
  triggerOffset?: number
  edgeOffset?: number
  isOpen?: boolean,
  isClickable?: boolean
  isFocusable?: boolean
  isHoverable?: boolean
  isDismissable?: boolean
  isSameScroll?: boolean
  isInline?: boolean
  isFullscreen?: boolean
  shouldOffset?: boolean,
  shouldFlip?: boolean,
  shouldShift?: boolean,
  shouldResize?: boolean,
  shouldScroll?: boolean,
  shouldMatchWidth?: boolean,
}

export type FloatingActions = {
  setOpen: ( isOpen:boolean ) => void
  toggleOpen: (  ) => void
}

const Context = createContext<any>( {} )

function Root ( {
  actions,
  role: r,
  strategy = "absolute",
  placement = "bottom-start",
  triggerOffset = 0,
  edgeOffset = 16,
  delay = 100,
  className,
  children,
  isOpen: isControlledOpen,
  isClickable = false,
  isFocusable = false,
  isHoverable = false,
  isDismissable = true,
  isSameScroll = false,
  isInline = false,
  isFullscreen = false,
  shouldOffset = true,
  shouldFlip = true,
  shouldShift = true,
  shouldResize = true,
  shouldScroll = false,
  shouldMatchWidth = false,
  ...props
}: FloatingProps ) {

  const [ isOpen, setOpen ] = useState<boolean>( false )

  const { context, refs, floatingStyles } = useFloating( {
    open: isOpen,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      isInline && inline(),
      shouldOffset && offset( triggerOffset ),
      shouldFlip && flip( { padding: edgeOffset } ),
      shouldShift && shift( { padding: edgeOffset } ),
      shouldResize && size( {
        padding: edgeOffset,
        apply ( { availableWidth, availableHeight, elements, rects, ...rest } ) {
          // console.log( rest, rects.reference.width )
          Object.assign( elements.floating.style, {
            ...shouldMatchWidth && { minWidth: `${ rects.reference.width }px` },
            ...shouldScroll && { overflow: "auto" },
            maxWidth: `${ availableWidth }px`,
            maxHeight: `${ availableHeight }px`,
          } )
        }
      } ),
    ],
    strategy,
    placement,
  } )

  const role = useRole( context, { role: r } )
  const click = useClick( context, { enabled: isClickable } )
  const hover = useHover( context, { enabled: isHoverable, delay } )
  const focus = useFocus( context, { enabled: isFocusable } )
  const dismiss = useDismiss( context, { enabled: isDismissable } )

  const { getReferenceProps, getFloatingProps } = useInteractions( [
    role,
    click,
    hover,
    focus,
    dismiss
  ] )

  useImperativeHandle( actions, () => ( {
    setOpen,
    toggleOpen: () => setOpen(isOpen => !isOpen),
  } ) )

  return <Context.Provider value={ {
    refs,
    floatingStyles,
    isOpen: isControlledOpen ?? isOpen,
    isFullscreen,
    setOpen,
    getReferenceProps,
    getFloatingProps,
    ...props,
  } }>{ children }</Context.Provider>

}

export type FloatingTriggerProps = BoxProps
function FloatingTrigger ( { children, asChild, ...rest }: FloatingTriggerProps ) {
  const { refs, isOpen, setOpen, getReferenceProps } = useFloatingContext()
  const Wrapper = asChild ? Slot as any : Box
  return <Wrapper
    zIndex={ isOpen ? 101 : undefined }
    ref={ refs.setReference }
    { ...getReferenceProps() }
    { ...rest }
  >{ children || <></> }</Wrapper>
}

export type FloatingOverlayProps = BoxProps & { as?: FC<PropsWithChildren> }
const FloatingOverlay = ( { asChild, as: Container = Fragment, children = null, ...props }: FloatingOverlayProps ) => {
  const { isOpen, setOpen, isDismissable } = useContext( Context )
  const Wrapper = asChild ? Slot as any : Box

  return <Portal zIndex={ 100 }>
    <Container>{ isOpen && <Wrapper
    zIndex={ 100 }
    pointerEvents="auto"
    position="fixed"
    overflow="hidden"
    top={ 0 }
    right={ 0 }
    bottom={ 0 }
    left={ 0 }
    onPressIn={ event => {
      event.stopPropagation()
      event.preventDefault()
      if ( isDismissable ) setOpen( false )
    } } { ...props } >{ children || <></> }</Wrapper> }</Container></Portal>
}


export type FloatingContentProps = BoxProps & { as?: FC<PropsWithChildren> }
function FloatingContent ( { children, as: Container = Fragment, asChild }: FloatingContentProps ) {
  const { refs, isOpen, floatingStyles, getFloatingProps } = useFloatingContext()
  const Wrapper = asChild ? Slot as any : Box

  return <Portal zIndex={ 200 }>
    <Container>{ isOpen && <Wrapper
    zIndex={ 200 }
    pointerEvents="auto"
    ref={ refs.setFloating }
    style={ floatingStyles }
    { ...getFloatingProps() }
  >{ children || <></> }</Wrapper> }</Container>
  </Portal>
}

function useFloatingContext () {
  return useContext( Context )
}

const Floating = Root as typeof Root & {
  Root: typeof Root,
  Trigger: typeof FloatingTrigger,
  Content: typeof FloatingContent,
  Overlay: typeof FloatingOverlay
}

Floating.Root = Root
Floating.Trigger = FloatingTrigger
Floating.Content = FloatingContent
Floating.Overlay = FloatingOverlay

export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext }
