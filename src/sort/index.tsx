import { Slot } from "@tamagui/core"
import { ReactNode, useState } from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { useKeys } from "../use-keys"
import { Box, BoxProps, type YStackProps } from '../box'
import { DndProvider } from '../dnd'

import {
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
    getKey = v => ( v as any )?.id || ( v as any )?.key || JSON.stringify( v ),
    ...rest
}: SortProps<T> ) {

    const [ keys, swap ] = useKeys()

    return <YStack { ...rest }>
        <DndProvider onDragEnd={ handleDragEnd }>
            <SortableContext items={ keys } strategy={ verticalListSortingStrategy }>
                { ( value || [] )?.map( ( item, index ) => (
                    <Sortable
                        id={ keys[ index ] }
                        key={ keys[ index ] }
                        render={ options => renderItem?.( item, options, index ) }
                    />
                ) ) }{ !( value || [] )?.length && renderEmpty?.() }</SortableContext>
        </DndProvider>
    </YStack>

    function handleDragEnd ( { active, over } ) {

        if ( active?.id !== over?.id ) {

            const fromIndex = keys.indexOf( active?.id )
            const toIndex = keys.indexOf( over?.id )

            if ( fromIndex === -1 ) return
            if ( toIndex === -1 ) return
            if ( fromIndex === toIndex ) return

            const result = reorder( ( value || [] ), fromIndex, toIndex )
            swap( fromIndex, toIndex )
            onValueChange?.( result )

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

function reorder<T = unknown> (
    list: T[],
    fromIndex: number,
    toIndex: number
): T[] {
    const result = [ ...list ]
    const [ removed ] = result.splice( fromIndex, 1 )
    result.splice( toIndex, 0, removed )
    return result
}