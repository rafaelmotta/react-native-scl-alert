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
  get baseBackgroundColor () {
    return '#FFFFFF'
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

  get black () {
    return '#333333'
  },

  get default () {
    return '#e0e0e0'
  },

  get inverse () {
    return '#343a40'
  },

  get success () {
    return '#28a745'
  },

  get info () {
    return '#007bff'
  },

  get danger () {
    return '#dc3545'
  },

  get warning () {
    return '#ffc107'
  },

  /**
   * Themes backgrounds
   */
  get defaultBackground () {
    return this.default
  },

  get inverseBackground () {
    return this.inverse
  },

  get successBackground () {
    return this.success
  },

  get infoBackground () {
    return this.info
  },

  get dangerBackground () {
    return this.danger
  },

  get warningBackground () {
    return this.warning
  },

  /**
   * Themes colors
   */
  get defaultColor () {
    return this.black
  },

  get inverseColor () {
    return this.white
  },

  get successColor () {
    return this.white
  },

  get infoColor () {
    return this.white
  },

  get dangerColor () {
    return this.white
  },

  get warningColor () {
    return this.black
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
    return width * 0.80
  },

  // Header circle
  get headerCircleSize () {
    return this.scale(80)
  }
}
