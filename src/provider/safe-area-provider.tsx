import { Fragment, useMemo } from "react"

export const SafeAreaProvider = Fragment

export interface EdgeInsets {
  top: number
  right: number
  bottom: number
  left: number
}

export function useSafeInsets(): EdgeInsets {
  return useMemo( () => ( { top: 0, right: 0, bottom: 0, left: 0 } ), [] )
}
