import { Slot } from "@tamagui/core"
import { ReactNode, useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { Box, BoxProps, type YStackProps } from '../box'
import { DndProvider } from '../dnd'

import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { UniqueIdentifier } from '@dnd-kit/core'
import { YStack } from '@tamagui/stacks'

export type SortRenderOptions = {
    isDragging: boolean,
    props?: BoxProps,
}

export type SortProps<T> = YStackProps & {
    value?: T[]
    onValueChange?: ( value: T[] ) => void
    renderItem?: ( item: T, options: SortRenderOptions, index: number ) => ReactNode
    renderEmpty?: () => ReactNode
    getKey?: ( item: T ) => string
}

export function Sort<T> ( {
    value = [] as T[],
    onValueChange,
    renderItem,
    renderEmpty,
    getKey = v => ( v as any ).id ?? ( v as any ).key ?? JSON.stringify( v ),
    ...rest
}: SortProps<T> ) {

    return <YStack { ...rest }>
        <DndProvider onDragEnd={ handleDragEnd }>
            <SortableContext
                items={ (value||[])?.map?.( v => getKey( v ) ) }
                strategy={ verticalListSortingStrategy }
            >{ (value||[])?.map( ( item, index ) => (
                <Sortable key={ getKey( item ) } id={ getKey( item ) } render={ options => renderItem?.( item, options, index ) } />
            ) ) }{ !(value||[])?.length && renderEmpty?.() }</SortableContext>
        </DndProvider>
    </YStack>

    function handleDragEnd ( { active, over } ) {
        if ( active.id !== over.id ) {
            const fromIndex = (value||[]).findIndex( item => active.id === getKey( item ) )
            const toIndex = (value||[]).findIndex( item => over.id === getKey( item ) )
            const newArray = arrayMove( (value||[]), fromIndex, toIndex )
            onValueChange?.( newArray )
        }
    }

}

type SortableProps<T> = Omit<BoxProps, "children"> & {
    id: UniqueIdentifier
    render?: ( options: SortRenderOptions ) => ReactNode
}

function Sortable<T> ( { id, render, ...rest }: SortableProps<T> ) {

    const {
        attributes,
        isDragging,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition
    } = useSortable( { id } )

    const [ hasHandle, setHasHandle ] = useState( false )
    if ( transform ) transform.scaleX = 1
    if ( transform ) transform.scaleY = 1

    const parentProps = {
        style: {
            zIndex: isDragging ? 100 : undefined,
            transition,
        },
        transform: CSS.Transform.toString( transform ),
        ...hasHandle ? {} : listeners,
        ...attributes as any,
        ref: setNodeRef
    }

    const handleProps = {
        ...listeners,
        cursor: isDragging ? "grabbing" : "grab",
        ref: ( ref ) => {
            setHasHandle( true )
            setActivatorNodeRef( ref )
        },
    }

    return (
        <Box { ...parentProps }>
            <Slot children={ render?.( { isDragging, props: handleProps } ) || <></> } { ...rest } />
        </Box>
    )
}
