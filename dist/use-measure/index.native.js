import { useCallback, useState, useRef } from "react";
export function useMeasure() {
    const lastRef = useRef();
    const [bounds, setBounds] = useState({ top: 0, left: 0, width: 0, height: 0 });
    const ref = useCallback((node) => {
        if (lastRef.current !== node && node)
            setTimeout(() => {
                lastRef.current = node;
                node === null || node === void 0 ? void 0 : node.measure((top, left, width, height) => {
                    setBounds({ top, left, width, height });
                });
            }, 0);
    }, []);
    return [ref, bounds];
}
//# sourceMappingURL=index.native.js.map