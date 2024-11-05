import { useCallback, useState, useRef } from "react";
export function useMeasure() {
    const lastRef = useRef();
    const [bounds, setBounds] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const ref = useCallback((node) => {
        if (lastRef.current !== node && node) {
            lastRef.current = node;
            const rect = (node === null || node === void 0 ? void 0 : node.getBoundingClientRect()) || {};
            const { top = 0, left = 0, width = 0, height = 0 } = rect;
            setBounds({ top, left, width, height });
        }
    }, []);
    return [ref, bounds];
}
//# sourceMappingURL=index.js.map