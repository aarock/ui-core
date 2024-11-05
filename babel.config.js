export default {
    plugins: [
        [
            '@tamagui/babel-plugin',
            {
                exclude: /node_modules/,
                config: './tamagui.config.ts',
                components: [ '@aarock/ui-core', '@tamagui/core' ]
            },
        ],
    ],
}