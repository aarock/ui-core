import type { LinearGradientProps, LinearGradientPoint } from 'expo-linear-gradient'
export type { LinearGradientProps, LinearGradientPoint } from 'expo-linear-gradient'
import { normalizeColor } from '@tamagui/core'
// copied from https://raw.githubusercontent.com/expo/expo/main/packages/expo-linear-gradient/src/LinearGradient.web.tsx
import * as React from 'react'
import { Box as View, YStackProps } from '../box'

export type GradientProps = YStackProps & {
    colors: readonly string[];
    locations?: readonly number[] | null;
    start?: LinearGradientPoint | null;
    end?: LinearGradientPoint | null;
    dither?: boolean;
}

export function LinearGradient({
  colors,
  locations,
  start,
  end,
  ...props
}: GradientProps ) {
  const [{ height, width }, setLayout] = React.useState({
    height: 1,
    width: 1,
  })

  const linearGradientBackgroundImage = React.useMemo(() => {
    return getLinearGradientBackgroundImage(
      // @ts-expect-error ok
      colors,
      locations,
      start,
      end,
      width,
      height
    )
  }, [colors, locations, start, end, width, height])

  return (
    <View
      {...props}
      backgroundImage={ linearGradientBackgroundImage }
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout

        setLayout((oldLayout) => {
          // don't set new layout state unless the layout has actually changed
          if (width !== oldLayout.width || height !== oldLayout.height) {
            return { height, width }
          }

          return oldLayout
        })

        if (props.onLayout) {
          props.onLayout(event)
        }
      }}
    />
  )
}

function getLinearGradientBackgroundImage(
  colors: number[] | string[],
  locations?: number[] | null,
  startPoint?: LinearGradientPoint | null,
  endPoint?: LinearGradientPoint | null,
  width = 1,
  height = 1
) {
  const gradientColors = calculateGradientColors(
    // @ts-expect-error TODO fix numbers
    colors,
    locations
  )
  const angle = calculatePseudoAngle(width, height, startPoint, endPoint)
  return `linear-gradient(${angle}deg, ${gradientColors.join(', ')})`
}

function calculatePseudoAngle(
  width: number,
  height: number,
  startPoint?: LinearGradientPoint | null,
  endPoint?: LinearGradientPoint | null
) {
  const getControlPoints = (): LinearGradientPoint[] => {
    let correctedStartPoint: LinearGradientPoint = [0, 0]
    if (Array.isArray(startPoint)) {
      correctedStartPoint = [
        startPoint[0] != null ? startPoint[0] : 0.0,
        startPoint[1] != null ? startPoint[1] : 0.0,
      ]
    }
    let correctedEndPoint: LinearGradientPoint = [0.0, 1.0]
    if (Array.isArray(endPoint)) {
      correctedEndPoint = [
        endPoint[0] != null ? endPoint[0] : 0.0,
        endPoint[1] != null ? endPoint[1] : 1.0,
      ]
    }
    return [correctedStartPoint, correctedEndPoint]
  }

  const [start, end] = getControlPoints()
  start[0] *= width
  end[0] *= width
  start[1] *= height
  end[1] *= height
  const py = end[1] - start[1]
  const px = end[0] - start[0]

  return 90 + (Math.atan2(py, px) * 180) / Math.PI
}

function calculateGradientColors(colors: string[], locations?: number[] | null) {
  return colors.map((color: string, index: number): string | void => {
    const output = normalizeColor(color)
    if (locations && locations[index]) {
      const location = Math.max(0, Math.min(1, locations[index]))
      // Convert 0...1 to 0...100
      const percentage = location * 100
      return `${output} ${percentage}%`
    }
    return output
  })
}
