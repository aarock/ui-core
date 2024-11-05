import type { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core'
import { styled, useProps, useTheme } from '@tamagui/core'
import { YStack } from '../box'

import type { LinearGradientPoint } from './linear-gradient'
import { LinearGradient as LinearGradientBase } from './linear-gradient'

// taken from expo-linear-gradient
export type GradientExtraProps = {
  colors?: (ColorTokens | ThemeTokens | (string & {}))[]
  locations?: number[] | null
  start?: LinearGradientPoint | null
  end?: LinearGradientPoint | null
}

const GradientFrame = styled(YStack, {
  name: 'Gradient',
  overflow: 'hidden',
  position: 'relative',
})

export const Gradient = GradientFrame.styleable<GradientExtraProps>(
  (propsIn, ref) => {
    const props = useProps(propsIn)

    const { start, end, colors: colorsProp, locations, children, ...stackProps } = props
    const theme = useTheme()

    let colors =
      props.colors?.map((c) => {
        return (theme[c]?.get('web') as string) ?? c
      }) || []

    return (
      <GradientFrame ref={ref as any} {...stackProps}>
        <LinearGradientBase
          //@ts-ignore
          start={start}
          //@ts-ignore
          end={end}
          colors={colors}
          locations={locations}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        />
        {children}
      </GradientFrame>
    )
  }
)

export type LinearGradientProps = GetProps<typeof Gradient>
