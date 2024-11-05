import { ForwardedRef, PropsWithChildren, forwardRef } from "react"
import type * as _ from 'react-native-svg'
export type SvgProps = _.SvgProps


function resolve ( styleProp: any, cleanedProps: any ) {
    if ( styleProp ) return { ...( styleProp.length ? { ...styleProp } : styleProp ), ...cleanedProps }
    else return cleanedProps
}

function prepare ( props: any ) {
    const {
        translate,
        scale,
        rotate,
        skewX,
        skewY,
        originX,
        originY,
        fontFamily,
        fontSize,
        fontWeight,
        fontStyle,
        style,
        ...clean
    } = props

    // Correctly apply the transformation properties.
    // To apply originX and originY we need to translate the element on those values and
    // translate them back once the element is scaled, rotated and skewed.
    const transform: string[] = []

    /* eslint-disable eqeqeq */
    if ( originX != null || originY != null ) transform.push( `translate(${ originX || 0 }, ${ originY || 0 })` )
    if ( translate != null ) transform.push( `translate(${ translate })` )
    if ( scale != null ) transform.push( `scale(${ scale })` )
    if ( rotate != null ) transform.push( `rotate(${ rotate })` )
    if ( skewX != null ) transform.push( `skewX(${ skewX })` )
    if ( skewY != null ) transform.push( `skewY(${ skewY })` )
    if ( originX != null || originY != null ) transform.push( `translate(${ -originX || 0 }, ${ -originY || 0 })` )
    if ( transform.length ) clean.transform = transform.join( " " )

    const styles: any = {}
    if ( fontFamily != null ) styles.fontFamily = fontFamily
    if ( fontSize != null ) styles.fontSize = fontSize
    if ( fontWeight != null ) styles.fontWeight = fontWeight
    if ( fontStyle != null ) styles.fontStyle = fontStyle
    /* eslint-enable eqeqeq */
    clean.style = resolve( style, styles )

    return clean
}

function Circle ( props: _.CircleProps ) {
    return <circle { ...prepare( props ) } />
}

function ClipPath ( props: _.ClipPathProps ) {
    return <clipPath { ...prepare( props ) } />
}

function Defs ( props: PropsWithChildren ) {
    return <defs { ...prepare( props ) } />
}

function Ellipse ( props: _.EllipseProps ) {
    return <ellipse { ...prepare( props ) } />
}

function G<T> ( props: _.GProps ) {
    const { x, y, ...rest } = props
    if ( ( x || y ) && !rest.translate ) rest.translate = `${ x || 0 }, ${ y || 0 }`
    return <g { ...prepare( rest ) } />
}

// function Image ( props: _.ImageProps ) {
//     return <image { ...prepare( props ) } />
// }

function Line ( props: _.LineProps ) {
    return <line { ...prepare( props ) } />
}

function LinearGradient ( props: _.LinearGradientProps ) {
    return <linearGradient { ...prepare( props ) } />
}

function Path ( props: _.PathProps ) {
    return <path { ...prepare( props ) } />
}

function Polygon ( props: _.PolygonProps ) {
    return <polygon { ...prepare( props ) } />
}

function Polyline ( props: _.PolylineProps ) {
    return <polyline { ...prepare( props ) } />
}

function RadialGradient ( props: _.RadialGradientProps ) {
    return <radialGradient { ...prepare( props ) } />
}

function Rect ( props: _.RectProps ) {
    return <rect { ...prepare( props ) } />
}

function Stop ( props: _.StopProps ) {
    return <stop { ...prepare( props ) } />
}

function Symbol ( props: _.SymbolProps ) {
    return <symbol { ...prepare( props ) } />
}

// function Text ( props: _.TextProps ) {
//     return <text { ...prepare( props ) } />
// }

function TSpan ( props: _.TSpanProps ) {
    return <tspan { ...prepare( props ) } />
}

function TextPath ( props: _.TextPathProps ) {
    return <textPath { ...prepare( props ) } />
}

function Use ( props: _.UseProps ) {
    return <use { ...prepare( props ) } />
}

function Mask ( props: _.MaskProps ) {
    return <mask { ...prepare( props ) } />
}

function Pattern ( props: _.PatternProps ) {
    return <pattern { ...prepare( props ) } />
}

const Svg = forwardRef( ( props: _.SvgProps, ref: ForwardedRef<any> ) => {
    const { title, ...rest } = props
    if ( title ) return <svg ref={ ref } role="img" aria-label="[title]" { ...prepare( rest ) }>
        <title>{ title }{ props.children }</title>
    </svg>
    else return <svg ref={ ref } { ...prepare( rest ) } />
} )

export {
    Circle,
    ClipPath,
    Defs,
    Ellipse,
    G,
    // Image,
    Line,
    LinearGradient,
    Mask,
    Path,
    Pattern,
    Polygon,
    Polyline,
    RadialGradient,
    Rect,
    Stop,
    Svg,
    Symbol,
    TSpan,
    // Text,
    TextPath,
    Use
}

export default Svg