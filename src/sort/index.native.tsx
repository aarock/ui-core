import DraggableFlatList, { ScaleDecorator, RenderItemParams } from 'react-native-draggable-flatlist'
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { XStack, YStack } from '../box'
import type { SortProps } from "./index.js"

export function Sort<T> ( {
    value = [],
    onValueChange,
    renderItem,
    getKey = v => JSON.stringify( v ),
    gap = 0,
    ...rest
}: SortProps<T> ) {

    return <XStack { ...rest }>
        <GestureHandlerRootView>
            <DraggableFlatList
                style={ { overflow: "visible" } }
                data={ value }
                scrollEnabled={ false }
                keyExtractor={ getKey }
                onDragEnd={ ( { data } ) => onValueChange?.( data ) }
                renderItem={ ( { item, drag, isActive, getIndex }: RenderItemParams<T> ) => {
                    return <ScaleDecorator activeScale={ 1.01 }>
                        <YStack pb={ gap }>
                            { renderItem?.( item, { isDragging: isActive, props: { onPressIn: drag } }, getIndex?.() || 0 ) }
                        </YStack>
                    </ScaleDecorator>
                } }
            />
        </GestureHandlerRootView >
    </XStack>
}