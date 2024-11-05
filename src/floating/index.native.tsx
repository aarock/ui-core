import { createContext, useContext, useState, useEffect, useId, Fragment, FC, PropsWithChildren } from "react"
import { Keyboard } from "react-native"
import { useSafeInsets } from "../provider/safe-area-provider"
import { Box, type BoxProps } from "../box"
import { Slot } from "@tamagui/core"
import { Portal } from "@tamagui/portal"
import { type FloatingProps } from "./index.js"

import {
  useFloating,
  flip,
  shift,
  offset,
  size,
} from "@floating-ui/react-native"

const Context = createContext<any>( {} )

function Root ( {
  role: r,
  strategy = "absolute",
  placement = "bottom-start",
  triggerOffset = 0,
  edgeOffset = 16,
  delay = 100,
  className,
  children,
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
  // strategy = "absolute",
  // placement = "bottom-start",
  // triggerOffset = 4,
  // edgeOffset = 4,
  // className,
  // children,
  // isClickable = false,
  // isHoverable = false,
  // isDismissable = false,
  // shouldOffset = true,
  // shouldFlip = true,
  // shouldShift = true,
  // shouldResize = false,
  ...props
}: FloatingProps ) {

  // const id = useId()
  const [ isOpen, setOpen ] = useState<boolean>( false )
  const [ maxWidth, setMaxWidth ] = useState<number>()
  const [ maxHeight, setMaxHeight ] = useState<number>()
  const { left, right, top, bottom } = useSafeInsets()

  const padding = {
    top: top + edgeOffset,
    left: left + edgeOffset,
    bottom: bottom + edgeOffset,
    right: right + edgeOffset
  }

  const { update, refs, floatingStyles } = useFloating( {
    sameScrollView: isSameScroll,
    placement,
    middleware: [
      shouldOffset && offset( triggerOffset ),
      shouldFlip && flip( { padding, crossAxis: true, mainAxis: true, rootBoundary: 'document' } ),
      shouldShift && shift( { padding, crossAxis: true, mainAxis: true, rootBoundary: 'document' } ),
      shouldResize && size( { padding, apply ( { availableWidth: w, availableHeight: h } ) { setMaxWidth( w ); setMaxHeight( h ) } } ),
    ],
  } )

  // const role = useRole( context, { role: r } )
  // const click = useClick( context, { enabled: isClickable } )
  // const hover = useHover( context, { enabled: isHoverable } )
  // const focus = useFocus( context, { enabled: isFocusable } )
  // const dismiss = useDismiss( context, { enabled: isDismissable } )

  return <Context.Provider
    value={ {
      // id,
      refs,
      delay,
      update,
      placement,
      floatingStyles,
      isOpen,
      setOpen,
      maxWidth,
      maxHeight,
      shouldResize,
      isDismissable,
      isFullscreen,
      isFocusable,
      ...props,
    } }
  >{ children }</Context.Provider>

}

export type FloatingTriggerProps = Omit<BoxProps, "asChild">
const FloatingTrigger = ( { children, ...props }: FloatingTriggerProps ) => {
  const { refs, isOpen, setOpen, isFocusable } = useContext( Context )
  return <Slot
    display="relative"
    ref={ refs.setReference }
    zIndex={ isOpen ? 1001 : undefined }
    onPress={ () => setOpen( !isOpen ) }
    { ...isFocusable && { onChange: () => setOpen( true ) } }
    { ...isFocusable && { onFocus: () => setOpen( true ) } }
    { ...isFocusable && { onBlur: () => setOpen( false ) } }
    { ...props }
  >{ children }</Slot>
}

export type FloatingOverlayProps = BoxProps & { as?: FC<PropsWithChildren> }
const FloatingOverlay = ( { asChild, as: Container = Fragment, children = null, ...props }: FloatingOverlayProps ) => {
  const { isOpen, setOpen, isDismissable } = useContext( Context )
  const Wrapper = asChild ? Slot : Box

  return <Portal zIndex={ 100 }>
    <Container>{ isOpen && <Wrapper
      position="absolute"
      overflow="hidden"
      top={ 0 }
      right={ 0 }
      bottom={ 0 }
      left={ 0 }
      onPressIn={ event => {
        event.stopPropagation()
        event.preventDefault()
        if ( isDismissable ) Keyboard.dismiss()
        if ( isDismissable ) setOpen( false )
      } } { ...props } >{ children }</Wrapper> }</Container>
  </Portal>
}

//   const { refs, isOpen, setOpen } = useContext( Context )
//   return <Box
//     ref={ refs.setReference }
//     onTouchStart={ () => setOpen( !isOpen ) }
//     { ...props }
//   >{ children }</Box>

export type FloatingContentProps = BoxProps & { as?: FC<PropsWithChildren> }
const FloatingContent = ( { children, asChild, as: Container = Fragment, ...props }: FloatingContentProps ) => {
  const { isOpen, isFullscreen, update, refs, floatingStyles, shouldResize, maxWidth, maxHeight, delay = 100 } = useContext( Context )
  // const { left: l, right: r, top: t, bottom: b, ...rest } = isFullscreen ? { left: 0, right: 0, top: 0, bottom: 0 } : floatingStyles
  const { left: l, top: t, right: r, bottom: b, ...rest } = isFullscreen ? { left: 0, right: 0, top: 0, bottom: 0 } : floatingStyles
  const { left, right, top, bottom } = useSafeInsets()
  const [ opacity, setOpacity ] = useState( 0 )
  const display = isOpen ? "flex" : "none"
  const Wrapper = asChild ? Slot : Box

  useEffect( () => {
    update?.()
    setTimeout( () => update?.(), delay )
    setTimeout( () => setOpacity( isOpen ? 1 : 0 ), delay )
  }, [ isOpen ] )

  return <Portal zIndex={ 200 }>
    <Container>{ isOpen && <Wrapper ref={ refs.setFloating }
      opacity={ opacity }
      display={ display }
      style={ {
        ...Number.isNaN( t ) || t === undefined ? {} : { top: ( t ) },
        ...Number.isNaN( l ) || l === undefined ? {} : { left: ( l ) },
        ...Number.isNaN( r ) || r === undefined ? {} : { right: ( r ) },
        ...Number.isNaN( b ) || b === undefined ? {} : { bottom: ( b ) },
        ...shouldResize && maxWidth && !isFullscreen && { maxWidth: maxWidth - left - right },
        ...shouldResize && maxHeight && !isFullscreen && { maxHeight: maxHeight - top - bottom },
        ...rest,
      } } { ...props }>{ children }</Wrapper> }</Container>
  </Portal>

}

function useFloatingContext () {
  return useContext( Context )
}

const Floating = Root as typeof Root & {
  Root: typeof Root,
  Trigger: typeof FloatingTrigger,
  Content: typeof FloatingContent,
  Overlay: typeof FloatingOverlay,
}

Floating.Root = Root
Floating.Trigger = FloatingTrigger
Floating.Content = FloatingContent
Floating.Overlay = FloatingOverlay

export { Floating, FloatingTrigger, FloatingContent, FloatingOverlay, useFloatingContext }
