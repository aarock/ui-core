import { withPlugins, withTamagui } from "@tamagui/build"
export default withPlugins( [
    withTamagui( {
        config: './tamagui.config.ts',
        components: [ '@aarock/ui-core', 'tamagui' ],
    } )
] )