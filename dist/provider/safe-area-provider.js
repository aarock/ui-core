import { Fragment, useMemo } from "react";
export const SafeAreaProvider = Fragment;
export function useSafeInsets() {
    return useMemo(() => ({ top: 0, right: 0, bottom: 0, left: 0 }), []);
}
//# sourceMappingURL=safe-area-provider.js.map