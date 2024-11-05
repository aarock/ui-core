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
import { jsx as _jsx } from "react/jsx-runtime";
// import { DndContext, MouseSensor, TouchSensor, useDraggable, useDroppable, useSensor } from "@dnd-kit/core"
import { GestureHandlerRootView, State } from "react-native-gesture-handler";
import { DndProvider as DndProviderBase } from "@mgcrea/react-native-dnd";
export function Draggable(_a) {
    var { id, data, isDisabled: disabled } = _a, rest = __rest(_a, ["id", "data", "isDisabled"]);
    // const { attributes, listeners, setNodeRef, transform } = useDraggable( { id, data: data as any, disabled } )
    // const style = transform ? { transform: `translate3d(${ transform.x }px, ${ transform.y }px, 0)`, zIndex: 100 } : undefined
    // return <Slot ref={ setNodeRef } style={ style } { ...listeners } { ...attributes } { ...rest } />
}
export function Droppable(_a) {
    var { id, data, isDisabled: disabled } = _a, rest = __rest(_a, ["id", "data", "isDisabled"]);
    // const { isOver, setNodeRef } = useDroppable( { id, data: data as any, disabled } )
    // const style = { opacity: isOver ? 0.6 : 1.0, transform: isOver ? "scale(102%)" : "scale(100%)", transition: "transform 0.2s ease-out" }
    // return <Slot ref={ setNodeRef } style={ style } { ...rest } />
}
export function DndProvider({ onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel, }) {
    return _jsx(GestureHandlerRootView, { children: _jsx(DndProviderBase
        // sensors={ sensors }
        // onDragStart={ }
        // onDragMove={ }
        // onDragCancel={ }
        // onDragOver={ }
        , { 
            // sensors={ sensors }
            // onDragStart={ }
            // onDragMove={ }
            // onDragCancel={ }
            // onDragOver={ }
            onBegin: () => {
                "worklet";
                onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
            }, onUpdate: ({}) => {
                "worklet";
                onDragMove === null || onDragMove === void 0 ? void 0 : onDragMove();
            }, onDragEnd: ({ active, over }) => {
                "worklet";
                onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd({ active, over });
            }, onFinalize: ({ state }) => {
                "worklet";
                if (state !== State.FAILED)
                    onDragCancel === null || onDragCancel === void 0 ? void 0 : onDragCancel();
                // else onDragEnd?.()
                // else console.log( state )
            } }) });
}
//# sourceMappingURL=index.native.js.map