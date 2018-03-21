import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ViewPropTypes,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'

import variables from '../config/variables'

import {
  themeType,
  defaultThemeType
} from '../config/types'

SCLAlertButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  theme: themeType,
  onPress: PropTypes.func.isRequired
}

SCLAlertButton.defaultProps = {
  containerStyle: {},
  textStyle: {},
  themeType: defaultThemeType
}

function SCLAlertButton (props) {
  const childrenType = typeof props.children

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: variables[`${props.theme}Background`] },
          props.containerStyle
        ]}
      >
        {childrenType === 'string' && (
          <Text
            style={[
              styles.text,
              { color: variables[`${props.theme}Color`] },
              props.textStyle
            ]}
          >
            {props.children}
          </Text>
        )}
        {childrenType === 'object' && (
          <View>{props.children}</View>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: variables.gutter / 1.5,
    padding: variables.gutter / 1.5,
    borderRadius: variables.baseBorderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: variables.baseFontSize,
    color: variables.white,
    fontWeight: '700'
  }
})

export default SCLAlertButton
