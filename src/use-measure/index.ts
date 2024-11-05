import { useCallback, useState, useRef, type Ref } from "react"

export type Bounds = { top: number, left: number, width: number, height: number }

export function useMeasure (): [ Ref<any>, Bounds ] {

    const lastRef = useRef<any>()
    const [ bounds, setBounds ] = useState<Bounds>( { top: 0, left: 0, width: 0, height: 0 } )

    const ref = useCallback( ( node: any ) => {
        if ( lastRef.current !== node && node ) {
            lastRef.current = node
            const rect = node?.getBoundingClientRect() || {}
            const { top = 0, left = 0, width = 0, height = 0 } = rect as Bounds
            setBounds( { top, left, width, height } )
        }
    }, [] )

    return [ ref, bounds ]

}