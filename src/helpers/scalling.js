import {
  Dimensions
} from 'react-native'

const dimensions = Dimensions.get('window')

export const { width, height } = dimensions
export const guidelineBaseWidth = 350
export const guidelineBaseHeight = 680

const scale = size => width / guidelineBaseWidth * size
const verticalScale = size => height / guidelineBaseHeight * size
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor

export {
  scale,
  verticalScale,
  moderateScale
}
