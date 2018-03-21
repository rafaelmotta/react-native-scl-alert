import PropTypes from 'prop-types'

export const themeType = PropTypes.oneOf([
  'default',
  'inverse',
  'success',
  'info',
  'warning',
  'danger'
])
export const defaultThemeType = 'default'
