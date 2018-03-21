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

SCLAlertHeader.propTypes = {
  headerContainerStyles: ViewPropTypes.style,
  headerInnerStyles: ViewPropTypes.style,
  theme: themeType,
  headerIconComponent: PropTypes.node
}

SCLAlertHeader.defaultProps = {
  headerContainerStyles: {},
  headerInnerStyles: {},
  theme: defaultThemeType,
  headerIconComponent: null
}

function SCLAlertHeader (props) {
  return (
    <View style={[
      styles.container,
      styles.headerContainerStyles
    ]}>
      <View
        style={[
          styles.inner,
          styles.headerInnerStyles,
          { backgroundColor: variables[`${props.theme}Background`] }
        ]}
      >
        {props.headerIconComponent}
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

export default SCLAlertHeader
