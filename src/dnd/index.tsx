import { ReactNode } from "react"
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, closestCenter, useDraggable, useDroppable, useSensor } from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { Slot } from "@tamagui/core"

type DraggableProps<T> = { id: string, data: T, isDisabled?: boolean, children?: ReactNode }
export function Draggable<T> ( { id, data, isDisabled: disabled, ...rest }: DraggableProps<T> ) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable( { id, data: data as any, disabled } )
    const style = transform ? { transform: `translate3d(${ transform.x }px, ${ transform.y }px, 0)`, zIndex: 100 } : undefined
    return <Slot ref={ setNodeRef } { ...{ style } as any } { ...listeners } { ...attributes } { ...rest } />
}

type DroppableProps<T> = { id: string, data: T, isDisabled?: boolean, children?: ReactNode }
export function Droppable<T> ( { id, data, isDisabled: disabled, ...rest }: DroppableProps<T> ) {
    const { isOver, setNodeRef } = useDroppable( { id, data: data as any, disabled } )
    const style = { opacity: isOver ? 0.6 : 1.0, transform: isOver ? "scale(102%)" : "scale(100%)", transition: "transform 0.2s ease-out" }
    return <Slot ref={ setNodeRef } { ...{ style } as any } { ...rest } />
}

export type DndProviderProps<A, O> = {
    onDragStart?: () => void
    onDragMove?: () => void
    onDragOver?: ( context: { active: A, over: O } ) => void
    onDragEnd?: ( context: { active: A, over: O } ) => void
    onDragCancel?: () => void
    children?: ReactNode
}

export function DndProvider<A, O> ( {
    onDragStart,
    onDragMove,
    onDragOver,
    onDragEnd,
    onDragCancel,
    ...props
}: DndProviderProps<A, O> ) {

    const sensors = [
        useSensor( MouseSensor, { activationConstraint: { distance: 20 } } ),
        useSensor( MouseSensor ),
        useSensor( TouchSensor ),
        useSensor( PointerSensor ),
        useSensor( KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates } )
    ]

    return <DndContext
        sensors={ sensors }
        collisionDetection={ closestCenter }
        onDragStart={ onDragStart }
        onDragMove={ onDragMove }
        onDragCancel={ onDragCancel }
        onDragOver={ ( { active, over }: any ) => {
            onDragOver?.( { active, over, } )
        } }
        onDragEnd={ ( { active, over }: any ) => {
            onDragEnd?.( { active, over, } )
        } }
        { ...props }
    />
}