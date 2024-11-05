import { ReactNode, useMemo } from "react"
// import { DndContext, MouseSensor, TouchSensor, useDraggable, useDroppable, useSensor } from "@dnd-kit/core"
import { GestureHandlerRootView, State } from "react-native-gesture-handler"
import { useDraggable, useDroppable, DndProvider as DndProviderBase } from "@mgcrea/react-native-dnd"
// import { Slot } from "@tamagui/core"
import { type DndProviderProps } from "./index.js"

type DraggableProps<T> = { id: string, data: T, isDisabled?: boolean, children?: ReactNode }
export function Draggable<T> ( { id, data, isDisabled: disabled, ...rest }: DraggableProps<T> ) {
    // const { attributes, listeners, setNodeRef, transform } = useDraggable( { id, data: data as any, disabled } )
    // const style = transform ? { transform: `translate3d(${ transform.x }px, ${ transform.y }px, 0)`, zIndex: 100 } : undefined
    // return <Slot ref={ setNodeRef } style={ style } { ...listeners } { ...attributes } { ...rest } />
}

type DroppableProps<T> = { id: string, data: T, isDisabled?: boolean, children?: ReactNode }
export function Droppable<T> ( { id, data, isDisabled: disabled, ...rest }: DroppableProps<T> ) {
    // const { isOver, setNodeRef } = useDroppable( { id, data: data as any, disabled } )
    // const style = { opacity: isOver ? 0.6 : 1.0, transform: isOver ? "scale(102%)" : "scale(100%)", transition: "transform 0.2s ease-out" }
    // return <Slot ref={ setNodeRef } style={ style } { ...rest } />
}

export function DndProvider<A, O> ( {
    onDragStart,
    onDragMove,
    onDragOver,
    onDragEnd,
    onDragCancel,
}: DndProviderProps<A, O> ) {

    return <GestureHandlerRootView>
        <DndProviderBase
            // sensors={ sensors }
            // onDragStart={ }
            // onDragMove={ }
            // onDragCancel={ }
            // onDragOver={ }

            onBegin={ () => {
                "worklet"
                onDragStart?.()
            } }
            onUpdate={ ( { } ) => {
                "worklet"
                onDragMove?.()
            } }
            onDragEnd={ ( { active, over }: any ) => {
                "worklet"
                onDragEnd?.( { active, over } )
            } }
            onFinalize={ ( { state } ) => {
                "worklet"
                if ( state !== State.FAILED ) onDragCancel?.()
                // else onDragEnd?.()
                // else console.log( state )
            } }
        // { ...props }
        />
    </GestureHandlerRootView>
}