var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
function resolve(styleProp, cleanedProps) {
    if (styleProp)
        return Object.assign(Object.assign({}, (styleProp.length ? Object.assign({}, styleProp) : styleProp)), cleanedProps);
    else
        return cleanedProps;
}
function prepare(props) {
    const { translate, scale, rotate, skewX, skewY, originX, originY, fontFamily, fontSize, fontWeight, fontStyle, style } = props, clean = __rest(props
    // Correctly apply the transformation properties.
    // To apply originX and originY we need to translate the element on those values and
    // translate them back once the element is scaled, rotated and skewed.
    , ["translate", "scale", "rotate", "skewX", "skewY", "originX", "originY", "fontFamily", "fontSize", "fontWeight", "fontStyle", "style"]);
    // Correctly apply the transformation properties.
    // To apply originX and originY we need to translate the element on those values and
    // translate them back once the element is scaled, rotated and skewed.
    const transform = [];
    /* eslint-disable eqeqeq */
    if (originX != null || originY != null)
        transform.push(`translate(${originX || 0}, ${originY || 0})`);
    if (translate != null)
        transform.push(`translate(${translate})`);
    if (scale != null)
        transform.push(`scale(${scale})`);
    if (rotate != null)
        transform.push(`rotate(${rotate})`);
    if (skewX != null)
        transform.push(`skewX(${skewX})`);
    if (skewY != null)
        transform.push(`skewY(${skewY})`);
    if (originX != null || originY != null)
        transform.push(`translate(${-originX || 0}, ${-originY || 0})`);
    if (transform.length)
        clean.transform = transform.join(" ");
    const styles = {};
    if (fontFamily != null)
        styles.fontFamily = fontFamily;
    if (fontSize != null)
        styles.fontSize = fontSize;
    if (fontWeight != null)
        styles.fontWeight = fontWeight;
    if (fontStyle != null)
        styles.fontStyle = fontStyle;
    /* eslint-enable eqeqeq */
    clean.style = resolve(style, styles);
    return clean;
}
function Circle(props) {
    return _jsx("circle", Object.assign({}, prepare(props)));
}
function ClipPath(props) {
    return _jsx("clipPath", Object.assign({}, prepare(props)));
}
function Defs(props) {
    return _jsx("defs", Object.assign({}, prepare(props)));
}
function Ellipse(props) {
    return _jsx("ellipse", Object.assign({}, prepare(props)));
}
function G(props) {
    const { x, y } = props, rest = __rest(props, ["x", "y"]);
    if ((x || y) && !rest.translate)
        rest.translate = `${x || 0}, ${y || 0}`;
    return _jsx("g", Object.assign({}, prepare(rest)));
}
// function Image ( props: _.ImageProps ) {
//     return <image { ...prepare( props ) } />
// }
function Line(props) {
    return _jsx("line", Object.assign({}, prepare(props)));
}
function LinearGradient(props) {
    return _jsx("linearGradient", Object.assign({}, prepare(props)));
}
function Path(props) {
    return _jsx("path", Object.assign({}, prepare(props)));
}
function Polygon(props) {
    return _jsx("polygon", Object.assign({}, prepare(props)));
}
function Polyline(props) {
    return _jsx("polyline", Object.assign({}, prepare(props)));
}
function RadialGradient(props) {
    return _jsx("radialGradient", Object.assign({}, prepare(props)));
}
function Rect(props) {
    return _jsx("rect", Object.assign({}, prepare(props)));
}
function Stop(props) {
    return _jsx("stop", Object.assign({}, prepare(props)));
}
function Symbol(props) {
    return _jsx("symbol", Object.assign({}, prepare(props)));
}
// function Text ( props: _.TextProps ) {
//     return <text { ...prepare( props ) } />
// }
function TSpan(props) {
    return _jsx("tspan", Object.assign({}, prepare(props)));
}
function TextPath(props) {
    return _jsx("textPath", Object.assign({}, prepare(props)));
}
function Use(props) {
    return _jsx("use", Object.assign({}, prepare(props)));
}
function Mask(props) {
    return _jsx("mask", Object.assign({}, prepare(props)));
}
function Pattern(props) {
    return _jsx("pattern", Object.assign({}, prepare(props)));
}
const Svg = forwardRef((props, ref) => {
    const { title } = props, rest = __rest(props, ["title"]);
    if (title)
        return _jsx("svg", Object.assign({ ref: ref, role: "img", "aria-label": "[title]" }, prepare(rest), { children: _jsxs("title", { children: [title, props.children] }) }));
    else
        return _jsx("svg", Object.assign({ ref: ref }, prepare(rest)));
});
export { Circle, ClipPath, Defs, Ellipse, G, 
// Image,
Line, LinearGradient, Mask, Path, Pattern, Polygon, Polyline, RadialGradient, Rect, Stop, Svg, Symbol, TSpan, 
// Text,
TextPath, Use };
export default Svg;
//# sourceMappingURL=index.js.map