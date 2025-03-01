import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create( {
    row: { flexDirection: 'row' },
} )

export const Cell = ( { onLayout, index, width, style, ...props } ) => {
    return (
        <View
            onLayout={ ( event ) => onLayout( index, event ) }
            style={ [ { width }, style ] }
            { ...props }
        >
            { typeof props.render === 'function' && props.render() || null }
        </View>
    )
}

export const Row = ( { onCellLayout, sizes, style, children, ...props } ) => {
    if ( typeof onCellLayout !== 'function' || !sizes ) {
        throw new Error( '<Row /> component must be a direct child of <Table /> component.' )
    }
    return (
        <View
            style={ [ styles.row, style ] }
            { ...props }
        >
            { React.Children.map( children, ( cell, index ) => React.cloneElement( cell, {
                onLayout: onCellLayout,
                width: sizes[ index ],
                index,
            } ) ) }
        </View>
    )
}

export class Table extends React.Component {
    layoutCountLimit = undefined

    cellsLayoutCount = 0

    state = {
        renderSizes: {},
    }

    sizes = {}

    componentDidMount () {
        this._setLayoutCountLimit()
    }

    componentDidUpdate () {
        this._setLayoutCountLimit()
    }

    _onCellLayout = ( index, event ) => {
        this.cellsLayoutCount += 1
        const layoutWidth = event.nativeEvent.layout.width
        if ( !this.sizes[ index ] || this.sizes[ index ] < layoutWidth ) {
            this.sizes[ index ] = Math.ceil( layoutWidth )
        }
        if ( this.layoutCountLimit
            && this.cellsLayoutCount >= this.layoutCountLimit
            && !this._inSync() ) {
            this.setState( { renderSizes: this.sizes } )
        }
    }

    _inSync = () => {
        const stateSizes = Object.getOwnPropertyNames( this.state.renderSizes )
            .map( ( key ) => `${ key }:${ this.state.renderSizes[ key ] }` )
            .join( ',' )
        const classSizes = Object.getOwnPropertyNames( this.sizes )
            .map( ( key ) => `${ key }:${ this.sizes[ key ] }` )
            .join( ',' )

        return stateSizes === classSizes
    }

    _setLayoutCountLimit = () => {
        //@ts-ignore
        const rows = React.Children.toArray( this.props.children ).filter( Boolean )
        //@ts-ignore
        const colsPerRow = rows.map( ( row ) => React.Children.count( row.props.children ) )
        const minCols = Math.min( ...colsPerRow ) || 9
        const maxCols = Math.max( ...colsPerRow )

        // if ( !this.columnsCountWarned && minCols !== maxCols ) {
        //     this.columnsCountWarned = true
        //     console.warn( '[native-table] All rows do not have the same columns count. Render cycles optimisations are disabled.' )
        // }

        const numRows = rows.length

        // this.layoutCountLimit = minCols * numRows
    }

    reset = () => {
        this.layoutCountLimit = undefined
        this.cellsLayoutCount = 0
        this.sizes = {}
        this.setState( { renderSizes: {} } )
    }

    render () {
        return (
            <View { ...this.props }>
                {/* @ts-ignore */ }
                { React.Children.map( this.props.children, ( row ) => {
                    if ( !React.isValidElement( row ) ) return null

                    return React.cloneElement( row, {
                        // @ts-ignore
                        onCellLayout: this._onCellLayout,
                        sizes: this.state.renderSizes,
                    } )
                } ) }
            </View>
        )
    }
}