import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  StyleSheet
} from 'react-native'

import variables from '../config/variables'

import {
  themeType,
  defaultThemeType
} from '../config/types'

AlertHeader.propTypes = {
  alertContainerStyles: ViewPropTypes.style,
  alertInnerStyles: ViewPropTypes.style,
  theme: themeType,
  iconComponent: PropTypes.node.isRequired
}

AlertHeader.defaultProps = {
  alertContainerStyles: {},
  alertInnerStyles: {},
  theme: defaultThemeType
}

function AlertHeader (props) {
  return (
    <View style={[
      styles.container,
      styles.alertContainerStyles
    ]}>
      <View
        style={[
          styles.inner,
          styles.alertInnerStyles,
          { backgroundColor: variables[`${props.theme}Background`] }
        ]}
      >
        {props.iconComponent}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: variables.headerCircleSize / -2,
    left: (variables.contentWidth / 2) - (variables.headerCircleSize / 2)
  },
  inner: {
    width: variables.headerCircleSize,
    height: variables.headerCircleSize,
    borderRadius: variables.headerCircleSize,
    borderWidth: 4,
    borderColor: variables.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default AlertHeader
