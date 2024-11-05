import { type PropsWithChildren } from "react"

export type FontProviderProps = PropsWithChildren & {
    fonts: any
}

export function FontProvider ( { children }: FontProviderProps ) {
    return <>{ children }</>
}