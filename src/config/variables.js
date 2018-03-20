import { 
  scale
} from '../helpers/scalling'

import {
  width
} from '../helpers/dimensions'

export default {
  scale: size => {
    return scale(size)
  },

  /**
   * Font size
   */
  get baseFontSize () {
    return this.scale(14)
  },

  get smallFontSize () {
    return this.scale(12)
  },

  get mediumFontSize () {
    return this.scale(16)
  },

  get largeFontSize () {
    return this.scale(24)
  },

  /**
   * Colors
   */
  get baseBackgroundColor() {
    return '#FFFFFF';
  },

  get textColor () {
    return '#444444'
  },

  get subtitleColor () {
    return '#555555'
  },

  get white () {
    return '#FFFFFF'
  },

  /**
   * Themes
   */
  get defaultTheme () {
    return '#333333'
  },

  get invertTheme () {
    return '#333333'
  },

  get successTheme () {
    return '#ff3b30'
  },

  get infoTheme () {
    return '#007AFF'
  },

  get dangerTheme () {
    return '#ff3b30'
  },

  get warningTheme () {
    return '#ff3b30'
  },

  get overlayBackgroundColor () {
    return 'rgba(0, 0, 0, 0.4)'
  },

  get gutter () {
    return this.scale(15)
  },

  /**
   * Borders
   */
  get baseBorderRadius () {
    return 8
  },

  // Content
  get contentWidth () {
    return width * 0.75
  },

  // Header circle
  get headerCircleSize () {
    return this.scale(80)
  },
}