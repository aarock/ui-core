/**
 * Single source of truth for the Tamagui compiler across all bundlers.
 * babel.config.js, next.config.js, webpack.config.js and vite.config.ts
 * should all reference this file rather than duplicating these options.
 *
 * The compiler reads tamagui.config.ts to understand your design tokens,
 * theme values, and component tree so it can flatten and optimise at build time.
 */
export default {
    config: "./tamagui.config.ts",
    components: [ "@aarock/ui-core", "@tamagui/core" ],
    // Disable extraction in dev for faster HMR; enable in production for perf
    disableExtraction: process.env.NODE_ENV === "development",
    logTimings: true,
}
