// Tamagui compiler for Metro (React Native / Expo).
// Options are centralised in tamagui.build.ts so they stay in sync with the
// webpack and Next.js configs.
export default {
    plugins: [
        [
            '@tamagui/babel-plugin',
            {
                config: './tamagui.config.ts',
                components: [ '@aarock/ui-core', '@tamagui/core' ],
                logTimings: true,
                disableExtraction: process.env.NODE_ENV === 'development',
            },
        ],
    ],
}
