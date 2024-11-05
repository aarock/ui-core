import { Children, cloneElement } from 'react'
import { YStack as Stack, type YStackProps as StackProps } from '../box'

export type TableProps = StackProps

export function Table ( { style, children, ...props }: TableProps ) {
    const tableStyle = Object.assign( style || {}, { borderSpacing: 0 } )
    const rowTotal = Children.count( children )
    return <Stack
        // tag="table"
        // display="unset"
        // @ts-ignore
        display="table"
        style={ tableStyle }
        { ...props }
    >{ Children.map( children, ( child, rowIndex ) => cloneElement( child, {
        total: rowTotal,
        index: rowIndex,
    } ) ) }</Stack>
}

export type RowProps = StackProps & {
    total?: number,
    index?: number,
    sizes?: number[],
    width?: number | string,
    onCellLayout?: ( index: number, event: any ) => void,
}

export function Row ( { onCellLayout,
    borderBottomColor,
    borderBottomWidth,
    sizes,
    children,
    total,
    index,
    ...props }: RowProps ) {
    const cellTotal = Children.count( children )
    return <Stack
        // tag="tr" display="unset" 
        style={ { display: "table-row" } }
        { ...props }>{
            Children.map( children, ( child, cellIndex ) => cloneElement( child, {
                total: cellTotal,
                index: cellIndex,
                rowTotal: total,
                rowIndex: index,
                borderBottomColor,
                borderBottomWidth,
            } ) )
        }</Stack>
}


export type CellProps = StackProps & {
    total?: number,
    index?: number,
    rowTotal?: number,
    rowIndex?: number,
    onLayout?: ( index: number, event: any ) => void,
}

export const Cell = ( {
    total = -1,
    index = -1,
    rowTotal = -1,
    rowIndex = -1,
    onLayout,
    ...props
}: CellProps ) => {
    return <Stack
        // tag="td"
        style={ { display: "table-cell", verticalAlign: "middle", textAlign: "center" } }
        { ...props }
        { ...rowIndex === 0 && { borderTopWidth: 0 } }
        { ...rowIndex === rowTotal - 1 && { borderBottomWidth: 0 } }
    />
}