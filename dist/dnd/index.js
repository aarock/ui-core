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
import { DndContext, KeyboardSensor, MouseSensor, PointerSensor, TouchSensor, closestCenter, useDraggable, useDroppable, useSensor } from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { Slot } from "@tamagui/core";
export function Draggable(_a) {
    var { id, data, isDisabled: disabled } = _a, rest = __rest(_a, ["id", "data", "isDisabled"]);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, data: data, disabled });
    const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`, zIndex: 100 } : undefined;
    return _jsx(Slot, Object.assign({ ref: setNodeRef }, { style }, listeners, attributes, rest));
}
export function Droppable(_a) {
    var { id, data, isDisabled: disabled } = _a, rest = __rest(_a, ["id", "data", "isDisabled"]);
    const { isOver, setNodeRef } = useDroppable({ id, data: data, disabled });
    const style = { opacity: isOver ? 0.6 : 1.0, transform: isOver ? "scale(102%)" : "scale(100%)", transition: "transform 0.2s ease-out" };
    return _jsx(Slot, Object.assign({ ref: setNodeRef }, { style }, rest));
}
export function DndProvider(_a) {
    var { onDragStart, onDragMove, onDragOver, onDragEnd, onDragCancel } = _a, props = __rest(_a, ["onDragStart", "onDragMove", "onDragOver", "onDragEnd", "onDragCancel"]);
    const sensors = [
        useSensor(MouseSensor, { activationConstraint: { distance: 20 } }),
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
    ];
    return _jsx(DndContext, Object.assign({ sensors: sensors, collisionDetection: closestCenter, onDragStart: onDragStart, onDragMove: onDragMove, onDragCancel: onDragCancel, onDragOver: ({ active, over }) => {
            onDragOver === null || onDragOver === void 0 ? void 0 : onDragOver({ active, over, });
        }, onDragEnd: ({ active, over }) => {
            onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd({ active, over, });
        } }, props));
}
//# sourceMappingURL=index.js.map