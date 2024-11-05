import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo, createContext, useContext } from "react";
import { TamaguiProvider, createTamagui } from "@tamagui/core";
import { SafeAreaProvider } from "./safe-area-provider";
import { FontProvider } from "./font-provider";
import { PortalProvider } from "./portal-provider";
import { baseAnimations } from "./animations";
import { baseTokens } from "./tokens";
import { baseThemes } from "./tokens";
import { baseConfig } from "./base";
export { TamaguiProvider } from "@tamagui/core";
export { createTamagui as createConfig } from "@tamagui/core";
const tg = createTamagui(Object.assign(Object.assign({}, baseConfig), { animations: baseAnimations, tokens: baseTokens, themes: baseThemes }));
const Context = createContext({});
const IconProvider = Context.Provider;
export function getIcon(name) {
    return useContext(Context)[name];
}
export function UIProvider({ children, config, icons, theme = "light" }) {
    const mergedConfig = useMemo(() => createTamagui(Object.assign(Object.assign(Object.assign({}, baseConfig), config), { animations: baseAnimations, tokens: baseTokens, themes: baseThemes })), []);
    return _jsx(TamaguiProvider, { config: mergedConfig, defaultTheme: theme, children: _jsx(IconProvider, { value: Object.assign({}, icons), children: _jsx(FontProvider, { fonts: mergedConfig.fonts, children: _jsx(PortalProvider, { children: _jsx(SafeAreaProvider, { children: children || null }) }) }) }) });
}
export { Theme, useTheme } from "@tamagui/core";
export const defaultConfig = createTamagui(Object.assign(Object.assign({}, baseConfig), { animations: baseAnimations, tokens: baseTokens, themes: baseThemes }));
export function getFont(name) {
    var _a, _b;
    return ((_b = (_a = defaultConfig === null || defaultConfig === void 0 ? void 0 : defaultConfig.fonts) === null || _a === void 0 ? void 0 : _a[name]) === null || _b === void 0 ? void 0 : _b.family) || "Helvetica";
}
//# sourceMappingURL=index.js.map