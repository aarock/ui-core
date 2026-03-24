import { useCallback, useMemo, useState } from "react"

export type UseKeys = [ string[], ( from: number, to: number ) => void ]

export function useKeys (): UseKeys {
    const original = useMemo( () => Array( 1000 ).fill( 1 ).map( () => `${ Math.random() }`.substring( 2 ) ), [] )
    const [ keys, setKeys ] = useState( original )
    const swap = useCallback( ( fromIndex: number, toIndex: number ) => {
        const newKeys = Array.from( keys )
        const fromValue = newKeys[ fromIndex ] || `${ Math.random() }`.substring( 2 )
        const toValue = newKeys[ toIndex ] || `${ Math.random() }`.substring( 2 )
        newKeys[ toIndex ] = fromValue
        newKeys[ fromIndex ] = toValue
        setKeys( newKeys )
    }, [ keys ] )
    return [ keys, swap ]
}